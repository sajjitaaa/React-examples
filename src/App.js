import React from "react";
import Setup from "./tutorial/1-useState/setup/2-useState-basics";
import Setup1 from "./tutorial/1-useState/setup/3-useState-array";
import Setup2 from "./tutorial/1-useState/setup/4-useState-object";
import Setup3 from "./tutorial/1-useState/setup/5-useState-counter";
import Setup4 from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import Setup5 from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";

function App() {
  return (
    <div className="container">
      <Setup />
      <hr />
      <br />
      <Setup1 />
      <hr />
      <br />
      <Setup2 />
      <hr />
      <br />
      <Setup3 />
      <hr />
      <hr />
      <br />
      <Setup4 />
      <hr />
      <br />
      <Setup5 />
      <hr />
      <br />
    </div>
  );
}

export default App;
