import React, { useState } from "react";
import './App.css';
import Nav from "./Components/Nav";
import Video from "./Components/Video";

function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = (type) => {
    if(type == 'plus'){
      // console.log(type);
      setCounter(prev => prev + 1)
    }else{
      setCounter(prev => prev - 1)
    }
  }
  const toggler=()=>{
    setToggle((prev) => !prev);
  }

  return (
    <>
    
    <Nav/>
    <Video nnumber={counter}/>

    </>
  );
}

export default App;
