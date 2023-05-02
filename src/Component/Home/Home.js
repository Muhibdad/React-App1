import React from 'react'
import AuthContext from '../../Context/AuthContext';
export default function Home() {
  const authctx=React.useContext(AuthContext);
  return (
    <div>
      <div>Home</div> 
      <button type='Submit' onClick={authctx.SetLogInState} id='btn'>Log Out</button>
    </div>
  )
}
