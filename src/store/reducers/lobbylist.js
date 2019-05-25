import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  websocket: null,
  connected: false,
  error: false
};

export const setLobbies = (state, action) => {
  return updateObject(state, { data: JSON.parse(action.data).lobbies });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_LOBBYLIST:
      return setLobbies(state, action);
    case actionTypes.OPEN_LOBBYLIST:
      return ws.onOpen(state, action);
    case actionTypes.CLOSED_LOBBYLIST:
      return ws.onClose(state, action);
    case actionTypes.DISCONNECT_LOBBYLIST:
      return ws.onDisconnect(state, action);
    case actionTypes.BROKEN_LOBBYLIST:
      return ws.onError(state, action);
    case actionTypes.SEND_LOBBYLIST:
      return ws.onSendMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
