import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }
  function handlerDecrement() {
    dispatch(decrement());
  }
  return (
    <div className="container">
      <button onClick={handleIncrement}>+</button>
      <p>Count:{count}</p>
      <button onClick={handlerDecrement}>-</button>
    </div>
  );
};

export default App;
