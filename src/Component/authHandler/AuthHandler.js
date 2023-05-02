import React from "react";
import AuthContext from "../../Context/AuthContext";
import Login from "../Login/Login";
import Home from "../Home/Home";

const AuthHandler=()=>{
    const AuthCtx=React.useContext(AuthContext);
    return AuthCtx.isLoggedIn ? <Home />: <Login />
}
export default AuthHandler;