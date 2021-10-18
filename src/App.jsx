import React, { useState } from "react";
// import "./styles.css";

export const App = () => {
  console.log("App");
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>
      <>
    </div>
  );
};

export default App;