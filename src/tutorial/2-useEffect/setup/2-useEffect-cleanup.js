import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      //cleanup function
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h3>useEffect Cleanup</h3>
      <br />
      <h2>window size</h2>
      <h3>{size} PX</h3>
      <br />
    </>
  );
};

export default UseEffectCleanup;
