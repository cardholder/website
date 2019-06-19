import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  id: null,
  websocket: null,
  connected: false,
  error: false,
  status: ""
};

const onMessage = (state, action) => {
  console.log(action);
  return state;
};

export const onDisconnect = (state, action) => {
    console.log(action);
  if (state.websocket) {
    state.websocket.close();
  }
  return updateObject(state, {
    connected: false,
    data: null,
    id: null,
    websocket: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_OPEN:
      return ws.onOpen(state, action);
    case actionTypes.GAME_MESSAGE:
      return onMessage(state, action);
    case actionTypes.GAME_CLOSE:
      return ws.onClose(state, action);
    case actionTypes.GAME_DISCONNECT:
      return onDisconnect(state, action);
    case actionTypes.GAME_BROKEN:
      return ws.onError(state, action);
    case actionTypes.GAME_SEND:
      return ws.onSendMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
