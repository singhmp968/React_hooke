import "./App.css";
// we can use state in the functional based componenet using useState which is provided to us by react
import React, { useState } from "react";
function App() {
  // here function useState is hook,useState is used to let you in 'state' in  react and this let you create local state
  // useState will return  a array and wil be like this [currentState,function]  here currentState=> is current state and function is used to update the currentState
  // HOOK: A hook is simply a function that let you hooks you into react features such as state or component lifecycle methods
  // here serEmail will not merge with prev value but it will replace prev value
  const [email, setEmail] = useState("a@a.com"); // this will accept only one argument and that argument will be initial state of our component
  // const email = emailState[0]; // here @ 0th position we will get our currentState
  // const setEmail = emailState[1]; // here we will get function and this will let us to upadte out=r state

  /*  
  const emailState = useState("a@a.com"); // this will accept only one argument and that argument will be initial state of our component
  const email = emailState[0]; // here @ 0th position we will get our currentState
  const setEmail = emailState[1]; // here we will get function and this will let us to upadte out=r state
*/
  const NameState = useState(""); // this will accept only one argument and that argument will be initial state of our component
  const name = NameState[0]; // here @ 0th position we will get our currentState
  const setName = NameState[1]; // here we will get function and this will let us to upadte out=r state

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  return (
    <div className="App" style={{ padding: 10 }}>
      <input value={email} onChange={handleChange} />
      <input value={name} onChange={handleChangeName} />

      <p>Email: {email}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
