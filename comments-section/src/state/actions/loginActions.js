export const LOG_IN = 'SIGN_IN';
export const LOG_OUT = 'SIGN_OUT';

export const logIn = ({ username }) => ({
  type: LOG_IN,
  payload: {
    username
  },
})

export const logOut = () => ({
  type: LOG_OUT,
  payload: {},
})