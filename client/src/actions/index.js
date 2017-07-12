import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export const signinUser = ({ email, password }, history) => dispatch => {
  axios
    .post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      history.push('/feature');
    })
    .catch(err => {});
};
