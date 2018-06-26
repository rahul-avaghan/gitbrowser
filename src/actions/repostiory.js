import {
  GET_REPOSITORIES,
  GET_COMMITS,
  REFERSH_COMMITS,
  NO_ITEMS_AVAILABLE
} from "./type";
import { API_CONFIGURATION } from "../constants";

export const getRepositories = user => dispatch => {
  fetch(
    API_CONFIGURATION.URL +
      "/" +
      "users" +
      "/" +
      user +
      "/" +
      API_CONFIGURATION.REPO_CONTEXT +
      "?" +
      "&" +
      API_CONFIGURATION.ACCESS_TOKEN_LABEL +
      "=" +
      API_CONFIGURATION.TOKEN
  )
    .then(res => res.json())
    .then(response =>
      dispatch({
        type: GET_REPOSITORIES,
        payload: response
      })
    );
};

export const getCommits = (
  repositoryName,
  page = 1,
  pageSize = 20
) => dispatch => {
  fetch(
    API_CONFIGURATION.URL +
      "/" +
      API_CONFIGURATION.REPO_CONTEXT +
      "/" +
      API_CONFIGURATION.REPO_NAME +
      "/" +
      repositoryName +
      "/" +
      API_CONFIGURATION.COMMIT_CONTEXT +
      "?page=" +
      page +
      "&per_page=" +
      pageSize +
      "&access_token=" +
      API_CONFIGURATION.TOKEN
  )
    .then(res => res.json())
    .then(response => {
      response && response.length > 0
        ? dispatch({
            type: GET_COMMITS,
            payload: response
          })
        : dispatch({
            type: NO_ITEMS_AVAILABLE,
            payload: false
          });
    });
};

export const refreshCommits = () => dispatch => {
  dispatch({
    type: REFERSH_COMMITS,
    payload: []
  });
};

export const searchCommits = (
  user,
  repoName,
  search,
  page = 1,
  sizePage = 20
) => dispatch => {
  fetch(
    API_CONFIGURATION.URL +
      "/" +
      API_CONFIGURATION.SEARCH_COMMITS +
      "?page=" +
      page +
      "&per_page=" +
      sizePage +
      "&q=repo:" +
      user +
      "/" +
      repoName +
      "+" +
      search,
    {
      headers: {
        Accept: "application/vnd.github.cloak-preview"
      }
    }
  )
    .then(res => res.json())
    .then(response => {
      response.items && response.items.length > 0
        ? dispatch({
            type: GET_COMMITS,
            payload: response.items
          })
        : dispatch({
            type: NO_ITEMS_AVAILABLE,
            payload: false
          });
    });
};
