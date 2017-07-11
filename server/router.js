import { signup } from './controllers/authentication';
import passportService from './services/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

export default function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' });
  });

  app.post('/signup', signup);
}
