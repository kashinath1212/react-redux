import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../redux/testreduce/testAction";
import CounterState from "./CounterState";

const CounterCom = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <CounterState counter={counter}/>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
};

// const mapToStateProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increament: () => dispatch(increament()),
//     decreament: () => dispatch(decreament()),
//   };
// };

export default connect()(CounterCom);
