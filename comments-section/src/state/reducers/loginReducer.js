import users from '../../data/users.json';
import {LOG_IN, LOG_OUT} from '../actions/loginActions';

const initialState = {user: {}, loggedIn: false};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      const user = users.find(user => user.username === action.payload.username);
      if (user === undefined) return initialState;
      return {user, loggedIn: true};
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}