import React, { useState } from "react";

function App() {
  const [changeHeading,setHeading] = useState("Hello")
  function change(){
    setHeading("submited")
    // return(document.querySelector("h1").innerHTML = "submited")
  }
  const [isMouseOver,setMouseOver] = useState(true)

  function ColorIn(){
    setMouseOver(isMouseOver ? "black" : "white") 
  }
  function ColorOut(){
    setMouseOver(isMouseOver ? "white" : "black") 
  }
  
  return (
    <div className="container">
      <h1>{changeHeading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver}}
      onClick={change}
      onMouseOver={ColorIn}
      onMouseOut={ColorOut}
      >Submit</button>
    </div>
  );
}

export default App;
