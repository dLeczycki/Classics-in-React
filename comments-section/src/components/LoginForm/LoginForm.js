import React, {useState} from 'react'
import {useDispatch, connect} from 'react-redux';
import {logIn, logOut} from '../../state/actions/loginActions';

const LoginForm = ({login}) => {
  const dispatch = useDispatch();
  const {user, loggedIn} = login;
  const [usernameInput, setUsernameInput] = useState('');

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(logIn({username: usernameInput}));
  }

  const handleLogout = () => {
    setUsernameInput('');
    dispatch(logOut());
  }

  return ( 
    <>
      {
      !loggedIn ? 
        <form>
          <label htmlFor="login">Login: <input type="text" name="login" id="login" value={usernameInput} onChange={handleUsernameChange}/></label>
          <button type="submit" onClick={handleLogin}>Sign in</button>
        </form> 
      :
        <>
          <p>Hello, {user.username}!</p>
          <button type="submit" onClick={handleLogout}>Sign out</button>
        </>
      }
    </>
   );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  }
}
 
export default connect(mapStateToProps)(LoginForm);