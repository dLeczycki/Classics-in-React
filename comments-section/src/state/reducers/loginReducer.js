import {LOG_IN, LOG_OUT} from '../actions/loginActions';

export const loginReducer = (state = {username: '', loggedIn: false}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {username: action.payload.username, loggedIn: true};
    case LOG_OUT:
      return {...state, loggedIn: false};
    default:
      return state;
  }
}