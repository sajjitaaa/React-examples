import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    document.title = `New Messages(${value})`;
  });
  return (
    <>
      <br />
      <hr />
      <br />
      <h1>UseEffect</h1>
      <br />
      <hr />
      <br />
      <h3>useEffect basics</h3>
      <br />
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Plus one
      </button>
    </>
  );
};

export default UseEffectBasics;
