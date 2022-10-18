import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./testreduce/testReducer";
import { usersReducer } from "./userReduce/UserReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
