import axios from 'axios';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export const signinUser = ({ email, password }, history) => dispatch => {
  axios
    .post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER });

      localStorage.setItem('token', response.data.token);

      history.push('/feature');
    })
    .catch(err => {});
};
