import * as actionTypes from "../actionConfig";

export const fetchRequest = () => {
  return {
    type: actionTypes.FETCH_USER_REQUEST,
  };
};

export const fetchSuccess = (user) => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_USER_FAILED,
    payload: error,
  };
};
