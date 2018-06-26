import { combineReducers } from "redux";
import { repositoryReducer } from "./repositoryreducer";
import { tokenreducer } from "./tokenreducer";

export default combineReducers({
  repos: repositoryReducer,
  tokenreducer: tokenreducer
});
