import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

export default function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Using React Hooks / Redux</h4>
      <div> Counter is {counter}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
