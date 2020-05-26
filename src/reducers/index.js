import { combineReducers } from "redux";
import counter from "./counter";
import signin from "./signin";

const allReducers = combineReducers({
  counter,
  isLoggedin: signin
});

export default allReducers;
