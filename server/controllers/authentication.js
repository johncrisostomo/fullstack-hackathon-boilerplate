import User from '../models/user';
import bcrypt from 'bcrypt-nodejs';

export const signup = async (req, res, next) => {
  const { email, password } = req.body;
  let user;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide an email and password' });
  }

  try {
    user = await User.findOne({ email });
  } catch (err) {
    return next(err);
  }

  if (user) {
    return res.status(422).send({ Error: 'Email is in use.' });
  }

  const newUser = new User({ email, password });

  try {
    newUser.save();
  } catch (err) {
    return next(err);
  }

  res.json({ success: true });
};