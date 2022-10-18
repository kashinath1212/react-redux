import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { decreament, increament } from "../redux/testreduce/testAction";

function CounterState(props) {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch()
  return (
    <div>
      <div>Count: {props.counter}</div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(increament(+number))}>+</button>
      <button onClick={() => dispatch(decreament(+number))}>-</button>
    </div>
  );
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increamentBy: (number) => dispatch(increament(+number)),
//   };
// };

export default connect()(CounterState);
