import React, { useState } from "react";
// use
// component name must be uppercase
// must be inside function/component body
// cannot call conditionally

const UseStateBasics = () => {
  const [text, setText] = useState("hello world");
  const [btnText, setBtnText] = useState("click to change title");

  const handleClick = () => {
    if (text === "hello world") {
      setText("Welcome to React 2020 useState examples");
      setBtnText("click to get original title");
    } else {
      setText("hello world");
      setBtnText("click to change title");
    }
  };
  return (
    <React.Fragment>
      <hr />
      <br/>
      <h1>UseState</h1>
      <br/>
      <hr/>
      <br/>
      <h3>UseState basics</h3>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
