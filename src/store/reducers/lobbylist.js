import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  lobbies: null,
  url: null,
  websocket: null,
  conntected: false
};

const onOpen = (state, action) => {
  return updateObject(state, { websocket: action.websocket, conntected: true });
};

const onClose = (state, aciton) => {
  return updateObject(state, { conntected: false });
};

const setLobbies = (state, action) => {
  return updateObject(state, { lobbies: JSON.parse(action.lobbies).lobbies });
};

const onDisconnect = (state, action) => {
    state.websocket.close();
  return updateObject(state, { conntected: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_LOBBYLIST:
      return setLobbies(state, action);
    case actionTypes.OPEN_LOBBYLIST:
      return onOpen(state, action);
    case actionTypes.CLOSED_LOBBYLIST:
      return onClose(state, action);
    case actionTypes.DISCONNECT_LOBBYLIST:
      return onDisconnect(state, action);
    default:
      return state;
  }
};

export default reducer;
