import { SET_TOKEN, GET_TOKEN } from "../actions/Type";

const initialstate = {
  token: ""
};
export const TokenReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case GET_TOKEN:
      return {
        ...state,
        token: state.token
      };
    default:
      return { ...state };
  }
};
