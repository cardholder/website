import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";
import { updateObject } from "../utility";

const initialState = {
  lobby_id: null,
  player_id: null,
  players: [],
  game: null,
  visibility: null,
  max_players: null,
  websocket: null,
  connected: false,
  error: false
};

const onMessage = (state, action) => {
  let modifiedState = state;
  let data = JSON.parse(action.data);

  if (data.lobby) {
    modifiedState = updateObject(modifiedState, {
      lobby_id: data.lobby.id,
      game: data.lobby.game,
      players: data.lobby.players,
      player_id: data.lobby.your_id,
      visibility: data.lobby.visibility,
      max_players: data.lobby.max_players
    });
  } else if (data.players) {
    modifiedState = updateObject(modifiedState, {
      players: data.players
    });
  }

  return modifiedState;
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
      return onMessage(state, action);
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
