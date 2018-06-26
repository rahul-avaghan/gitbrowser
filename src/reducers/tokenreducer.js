import { SET_TOKEN, GET_TOKEN } from "../actions/type";

const initialstate = {
  token: ""
};
export const tokenreducer = (state = initialstate, action) => {
    debugger;
  switch (action.type) {
    case SET_TOKEN:
    debugger;
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
