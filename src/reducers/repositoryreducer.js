import {
  GET_REPOSITORIES,
  GET_COMMITS,
  REFERSH_COMMITS,
  SEARCH_COMMITS,
  NO_ITEMS_AVAILABLE
} from "../actions/type";

const initialstate = {
  repositories: [],
  commits: [],
  commitsAvaiable: true
};

export const repositoryReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload
      };
    case GET_COMMITS:
      return {
        ...state,
        commits: state.commits.concat(action.payload)
      };
    case REFERSH_COMMITS:
      return {
        ...state,
        commits: action.payload
      };
    case SEARCH_COMMITS:
      return {
        ...state,
        commits: action.payload
      };
    case NO_ITEMS_AVAILABLE:
      return {
        ...state,
        commitsAvaiable: action.payload
      };
    default:
      return state;
  }
};
