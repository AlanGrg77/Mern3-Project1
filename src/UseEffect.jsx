import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("This is useEffect type 1");
  }, []);
  useEffect(() => {
    console.log("This is useEffect type 2");
  }, [count]);
  useEffect(() => {
    console.log("This is useEffect type 3");
  });
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default UseEffect;
