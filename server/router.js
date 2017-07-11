import { signup } from './controllers/authentication';

export default function(app) {
  app.post('/signup', signup);
}
