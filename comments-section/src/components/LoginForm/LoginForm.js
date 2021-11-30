import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {logIn, logOut} from '../../state/actions/loginActions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.login.loggedIn);
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleLogin = () => {
    dispatch(logIn({username}));
  }

  const handleLogout = () => {
    dispatch(logOut());
  }

  return ( 
    <>
      {!loggedIn ? 
      <form>
        <label htmlFor="login">Login: <input type="text" name="login" id="login" value={username} onChange={handleUsernameChange}/></label>
        <button type="submit" onClick={handleLogin}>Sign in</button>
      </form> 
      :
      <>
        <p>Hello, {username}!</p>
        <button type="submit" onClick={handleLogout}>Sign out</button>
      </>}
    
    </>
   );
}
 
export default LoginForm;