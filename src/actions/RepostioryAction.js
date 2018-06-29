import {
  GET_REPOSITORIES,
  GET_COMMITS,
  REFERSH_COMMITS,
  NO_ITEMS_AVAILABLE
} from "./Type";
import { API_CONFIGURATION } from "../Constants";
/**
 * 
 * @param {string} token toke for fetching repo
 */
export const getRepositories = token => dispatch => {// arrow function feature of ES6 ..Why:clean code..better readability
  fetch(
    API_CONFIGURATION.URL +//github base url
      "/" +
      "users" +
      "/" +
      API_CONFIGURATION.REPO_NAME +//main repo or user name hard coded to facebook right now
      "/" +
      API_CONFIGURATION.REPO_CONTEXT +
      "?" +
      API_CONFIGURATION.ACCESS_TOKEN_LABEL +
      "=" +
      token
  )
    .then(res => res.json())
    .then(response =>
      dispatch({
        type: GET_REPOSITORIES,
        payload: response
      })
    );
};

/**
 * 
 * @param {string} token token for gitub repo not implemeted now
 * @param {string} repositoryName repository name for fetching commits
 * @param {number} page page number for pagiation
 * @param {number} pageSize optional
 */
export const getCommits = (
  token,
  repositoryName,
  page = 1,//defalut parameter feature of ES6 to assign a default value...Why : simplifirs the code..avoids sending values all the time and adds the flexibility to send custom values
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
      token
  )
    .then(res => res.json())
    .then(response => {
      debugger;
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
/**refersh commits from the UI */
export const refreshCommits = () => dispatch => {
  dispatch({
    type: REFERSH_COMMITS,
    payload: []
  });
};
/**
 * 
 * @param {string} user main owner
 * @param {string} repoName reponame
 * @param {string} search search string
 * @param {number} page page  number
 * @param {number} sizePage size of the page
 */
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
