import * as actionTypes from "../actionConfig";

const initial = {
  loading: false,
  users: [],
  error: "",
};

export const usersReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case actionTypes.FETCH_USER_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
