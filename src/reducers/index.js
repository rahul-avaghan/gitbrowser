import { combineReducers } from "redux";
import { RepositoryReducer } from "./RepositoryReducer";
import { TokenReducer } from "./TokenReducer";

export default combineReducers({
  repos: RepositoryReducer,
  tokenreducer: TokenReducer
});
