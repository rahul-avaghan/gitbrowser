import { SET_TOKEN, GET_TOKEN } from "../actions/type";

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const getToken = () => dispatch => {
  dispatch({
    type: GET_TOKEN
  });
};
