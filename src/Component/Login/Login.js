import React from 'react'
import AuthContext from '../../Context/AuthContext';

export default function Login() {
const authctx=React.useContext(AuthContext);
  return (
    <div>
      <div>Press the Button to Login</div>
      <button type='Submit' onClick={authctx.SetLogInState} id='btn'>Log In</button>
    </div>
  )
}
