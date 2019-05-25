import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";

const initialState = {
  data: null,
  websocket: null,
  connected: false,
  error: false
};

const onCreated = (state, action) => {
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOBBY_OPEN:
      return ws.onOpen(state, action);
    case actionTypes.LOBBY_MESSAGE:
      return onCreated(state, action);
    case actionTypes.LOBBY_CLOSE:
      return ws.onClose(state, action);
    case actionTypes.LOBBY_BROKEN:
      return ws.onError(state, action);
    case actionTypes.LOBBY_SEND:
      return ws.onSendMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
