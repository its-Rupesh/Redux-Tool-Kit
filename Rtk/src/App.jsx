import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  function handleIncrement() {}
  function handlerDecrement() {}
  return (
    <div className="container">
      <button onClick={handleIncrement}>+</button>
      <p>Count:</p>
      <button onClick={handlerDecrement}>-</button>
    </div>
  );
};

export default App;
