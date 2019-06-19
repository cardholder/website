import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  username: "",
  player_id: -1
};

const setUsername = (state, action) => {
  return updateObject(state, { username: action.username });
};

const setPlayerID = (state, action) => {
  return updateObject(state, { player_id: action.player_id });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return setUsername(state, action);
    case actionTypes.SET_PLAYERID:
      return setPlayerID(state, action);
    default:
      return state;
  }
};

export default reducer;
