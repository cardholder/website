import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  username: null
};

const setUsername = (state, action) => {
  return updateObject(state, { username: action.username });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return setUsername(state, action);
    default:
      return state;
  }
};

export default reducer;
