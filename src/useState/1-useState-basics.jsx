import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const incrementcount = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => {
      return prevCount + 1;
    });
    // setCount((prevCount) => {
    //   return prevCount + 1;
    // });
    setCount((prevCount) => prevCount + 1);
  };

  const decrementcount = () => {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={decrementcount}>-</button>
      <span>Count: {count}</span>
      <button onClick={incrementcount}>+</button>
    </div>
  );
};

export default Index;
