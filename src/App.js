import "./App.css";
// we can use state in the functional based componenet using useState which is provided to us by react
import React, { useState, useEffect } from "react";

/***********custom hooks************* */
function useFormInput(initialValue) {
  // creating custom hooks
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}
function App() {
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  // function handleEmailChange(e){
  //   setEmail(e.target.value);
  // }
  // function handlePasswordChange(e){
  //   setPassword(e.target.value);
  // }
  // here we dont need the above i.e emmail and set email values
  const email = useFormInput(""); // here we are calling the custom hooks function
  const password = useFormInput("");
  return (
    <div>
      <form>
        <div>Email</div>
        <div>
          {/* <input type="text" value={email} onChange={handleEmailChange} /> */}
          {/* other way i.e custome hooks way */}
          {/* 1st way */}
          {/* <input type="text" value={email.value} onChange={email.onChange} /> */}
          {/* 2nd way */}
          <input type="text" {...email} />
        </div>
        <div>Password</div>
        <div>
          <input
            type="password"
            value={password.value}
            onChange={password.onChange}
          />
        </div>
        <div>
          <p>{email.value}</p>
        </div>
      </form>
    </div>
  );
}

/***********custom hooks************* */

/*function App(props) {
  /**********************Use Effect************************ 
  const [userId, setUserId] = useState(["1"]);
  const [data, setData] = useState([]);
  useEffect(() => {
    //const url = `https://jsonplaceholder.typicode.com/posts?userId=${1}`;
    // for dynamically changing the user id
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setData(data); // beacause of this theew will be multiple call of api as our comp is re render and we will stuck in infinite loop  and to prevent to call it from every time or every render and useEffect will run againg and again and to solve we need to add []
      });
  }, [userId]); //by this we can perform componentDidupdate in hooks  here we are telling the useEffect function that userId value need to be change dynamically and then we can re call the render again and we can provide as many dependency as we can
  //}, []); // here it will avoid infinite loop and useEffect will run only once

  // there fore we can have 3 types of useEffect
  //1.by default we cont provide any thing like this '})' and it will run after every  render
  //2.we can give simple empty array like this equvalant to compDidMount },[]) and it will run only one time
  //3. componentDidUpdata alternative },[userId]) whenever the userId is update or changing the useEffect will be call again

  /************adding event listner nothing with life comp 
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    // once our comp is destroyed we need to destory our event listner to prevent memory leak
    // we can optionally a retun
    // or componenetDidUnmount alternative in a functional comp
    return () => {
      // providde clean up
      document.removeEventListener("mousemove", onMouseMove);
    };
  });
  function onMouseMove(e) {
    console.log(e.clientX);
  }
  return (
    <div className="App" style={{ paddingLeft: 20 }}>
      <h1>App</h1>
      <button onClick={() => setUserId("2")}>Change user id to 2</button>
      {console.log("dasdasd", data)}
      {data.map((user) => (
        <div>
          <p>{user.title}</p>
        </div>
      ))}
    </div>
  );
  */
/*********************Use Effect************************ */
/**********************Use Staete************************ */

// function App() {

/* here we are using useStare
  // here function useState is hook,useState is used to let you in 'state' in  react and this let you create local state
  // useState will return  a array and wil be like this [currentState,function]  here currentState=> is current state and function is used to update the currentState
  // HOOK: A hook is simply a function that let you hooks you into react features such as state or component lifecycle methods
  // here serEmail will not merge with prev value but it will replace prev value
  const [email, setEmail] = useState("a@a.com"); // this will accept only one argument and that argument will be initial state of our component
  // const email = emailState[0]; // here @ 0th position we will get our currentState
  // const setEmail = emailState[1]; // here we will get function and this will let us to upadte out=r state

    
  // const emailState = useState("a@a.com"); // this will accept only one argument and that argument will be initial state of our component
  // const email = emailState[0]; // here @ 0th position we will get our currentState
  // const setEmail = emailState[1]; // here we will get function and this will let us to upadte out=r state

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
*/
/**********************Use Staete************************ */
//}

export default App;
