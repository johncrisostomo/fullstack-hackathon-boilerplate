import { AUTH_USER, UNAUTH_USER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};
