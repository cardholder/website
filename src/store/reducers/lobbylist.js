import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";

const initialState = {
  lobbies: null,
  websocket: null,
  conntected: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_LOBBYLIST:
      return ws.setLobbies(state, action);
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
