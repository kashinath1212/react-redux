import * as actionTypes from "../actionConfig";

export const increament = (number = 1) => {
  return {
    type: actionTypes.INCREAMENT,
    payload: number,
  };
};

export const decreament = () => {
  return {
    type: actionTypes.DECREAMENT,
  };
};
