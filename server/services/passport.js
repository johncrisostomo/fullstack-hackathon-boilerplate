import passport from 'passport';
import User from '../models/user';
import config from '../config';
import { Strategy, ExtractJwt } from 'passport-jwt';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
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
