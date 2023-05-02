// import logo from './logo.svg';
import React from 'react';
import './App.css';
import List from './Component/List';
// import Items from './Component/Items';
import AddItem from './Component/AddItem';
import AuthContext from './Context/AuthContext';
import AuthHandler from './Component/authHandler/AuthHandler';

function App() {
  let arr=['arr1','arr2',"Muhib"];
  let [item,setItem]=React.useState(arr);
  let onAddHandler=(data)=>{
    console.log("Data: "+data);
    // setItem([...item,data])
    setItem((previousState)=>{
      return [...previousState,data]
    })
  }
 
  const [loginState,setState]=React.useState(false);

  const SetLogInState=()=>{
    setState(!loginState);
    // if(!loginState){
    //   document.querySelector('#btn').textContent="Log Out";
    // }
    // else{
    //   document.querySelector('#btn').textContent="Log In";
    // }
  }
  return (
    <div className='App'>
      {/* <List arr={item}/> */}
      {/* {items} */}
      <AuthContext.Provider value={{
        isLoggedIn:loginState,
        SetLogInState
      }}>
      <AuthHandler/>
      </AuthContext.Provider>
      {/* <AddItem onAdd={onAddHandler} /> */}
    </div>
  );
}

export default App;
