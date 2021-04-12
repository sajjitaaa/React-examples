// import React, { useState } from "react";

// const UseStateCounter = () => {
//   const [value, setValue] = useState(0);
//   const reset = () => {
//     setValue(0);
//   };

//   const complexIncrease = () => {
//     setTimeout(() => {
//       // setValue(value + 1);
//       setValue((prevState) => {
//         return prevState + 1;
//       });
//     }, 2000);
//   };

//   return (
//     <>
//       <h3>useState counter example</h3>
//       <section style={{ margin: "2rem 0" }}>
//         <h2>regular counter</h2>
//         <h2>{value}</h2>
//         <button className="btn" onClick={() => setValue(value - 1)}>
//           decrease
//         </button>
//         <button className="btn" onClick={reset}>
//           reset
//         </button>
//         <button className="btn" onClick={() => setValue(value + 1)}>
//           increase
//         </button>
//         <button
//           className="btn"
//           onClick={() => setValue(Math.floor(10 * Math.random()))}
//         >
//           get random
//         </button>
//       </section>
//       <section style={{ margin: "2rem 0" }}>
//         <h2>more complex counter</h2>
//         <h2>{value}</h2>
//         <button className="btn" onClick={complexIncrease}>
//           increase later
//         </button>
//       </section>
//     </>
//   );
// };

// export default UseStateCounter;
