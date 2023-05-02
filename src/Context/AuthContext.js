import React from "react";

let AuthContext=React.createContext({
    isLoggedIn: false,
    SetLogInState:()=>{}
});

export default AuthContext;