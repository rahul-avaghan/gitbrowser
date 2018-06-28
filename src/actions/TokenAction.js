import { SET_TOKEN, GET_TOKEN } from "../actions/Type";
/** set token to store */
export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};
/** get token from store */
export const getToken = () => dispatch => {
  dispatch({
    type: GET_TOKEN
  });
};
