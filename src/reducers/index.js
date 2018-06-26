import { combineReducers } from "redux";
import { repositoryReducer } from "./repositoryreducer";

export default combineReducers({
  repos: repositoryReducer

});
