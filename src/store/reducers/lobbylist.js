import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  lobbies: null,
  url: null,
  websocket: null,
  conntected: false,
  error: false
};

const onOpen = (state, action) => {
  return updateObject(state, {
    websocket: action.websocket,
    conntected: true,
    error: false
  });
};

const onClose = (state, aciton) => {
  return updateObject(state, { conntected: false, lobbies: null });
};

const setLobbies = (state, action) => {
  return updateObject(state, { lobbies: JSON.parse(action.lobbies).lobbies });
};

const onDisconnect = (state, action) => {
  if (state.websocket) {
    state.websocket.close();
  }
  return updateObject(state, { conntected: false });
};

const onError = (state, action) => {
  return updateObject(state, { error: true });
};

const onSendMessage = (state, action) => {
    if (state.websocket) {
        state.websocket.send(JSON.stringify(action.message));
    }

    return state;
}

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
    case actionTypes.BROKEN_LOBBYLIST:
      return onError(state, action);
      case actionTypes.SEND_LOBBYLIST:
      return onSendMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
