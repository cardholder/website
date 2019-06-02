import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  id: null,
  websocket: null,
  connected: false,
  error: false,
  status: "",
  sent: false
};

const onCreated = (state, action) => {
  return updateObject(state, { id: JSON.parse(action.data).id });
};

export const onDisconnect = (state, action) => {
  if (state.websocket) {
    state.websocket.close();
  }
  return updateObject(state, {
    conntected: false,
    data: null,
    id: null,
    websocket: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOBBY_OPEN:
      return ws.onOpen(state, action);
    case actionTypes.LOBBY_MESSAGE:
      return onCreated(state, action);
    case actionTypes.LOBBY_CLOSE:
      return ws.onClose(state, action);
    case actionTypes.LOBBY_DISCONNECT:
      return onDisconnect(state, action);
    case actionTypes.LOBBY_BROKEN:
      return ws.onError(state, action);
    case actionTypes.LOBBY_SEND:
      return ws.onSendMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
