import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/user';
import config from '../config';
import { Strategy, ExtractJwt } from 'passport-jwt';

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    let user;
    let isMatch;

    try {
      user = await User.findOne({ email });
    } catch (findError) {
      return done(findError);
    }

    if (!user) {
      return done(null, false);
    }

    try {
      isMatch = await user.comparePassword(password);
    } catch (compareError) {
      return done(compareError);
    }

    if (!isMatch) {
      return done(null, false);
    }

    return done(null, user);
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  let user;

  try {
    user = User.findById(payload.sub);
  } catch (findError) {
    return done(findError, false);
  }

  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});

passport.use(jwtLogin);
passport.use(localLogin);
