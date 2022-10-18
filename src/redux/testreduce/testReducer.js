import * as actionTypes from "../actionConfig";

const initial = {
  counter: 0,
};

const counterReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.INCREAMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case actionTypes.DECREAMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
