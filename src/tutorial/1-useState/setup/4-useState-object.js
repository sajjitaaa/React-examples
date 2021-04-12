import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sajjita",
    age: 21,
    message: "random message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello " + person.name });
  };
  return (
    <>
      <h3>useState object</h3>
      <br />
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
