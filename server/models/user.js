import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

const Model = mongoose.model('user', userSchema);

export default Model;
