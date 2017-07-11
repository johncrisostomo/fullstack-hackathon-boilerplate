import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, (saltingError, salt) => {
    if (saltingError) {
      return next(saltingError);
    }

    bcrypt.hash(user.password, salt, null, (hashingError, hash) => {
      if (hashingError) {
        return next(hashingError);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) {
        reject(err);
      }

      resolve(isMatch);
    });
  });
};

const Model = mongoose.model('user', userSchema);

export default Model;
