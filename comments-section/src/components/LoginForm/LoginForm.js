import React, {useState} from 'react'
import {useDispatch, connect} from 'react-redux';
import {logIn, logOut} from '../../state/actions/loginActions';

import './LoginForm.css';

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

  const handleLogout = (e) => {
    e.preventDefault();
    setUsernameInput('');
    dispatch(logOut());
  }

  return ( 
    
    <form className="login" autoComplete="off">
      {
      !loggedIn ? 
        <>
          <input type="text" name="login" id="login" value={usernameInput} onChange={handleUsernameChange} placeholder="Username..."/>
          <button type="submit" onClick={handleLogin}>Sign in</button>
        </>
      :
        <>
          <p>Hello, {user.username}!</p>
          <button type="submit" onClick={handleLogout}>Sign out</button>
        </>
      }
      </form> 
   );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  }
}
 
export default connect(mapStateToProps)(LoginForm);