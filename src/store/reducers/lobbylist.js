import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  websocket: null,
  connected: false,
  error: false
};

const addLobby = (state, lobby) => {
  let lobbies = [...state.data];
  lobbies.push(lobby);
  return updateObject(state, { data: lobbies })
}

const removeLobby = (state, lobby_id) => {
  let lobbies = [...state.data];
  lobbies = lobbies.filter(item => item.id !== lobby_id)
  return updateObject(state, { data: lobbies });
}

export const setLobbies = (state, action) => {
  let modifiedState = state;
  console.log(action);
  let data = JSON.parse(action.data);
  console.log(data);
  if (data.lobbies) {
    modifiedState = updateObject(modifiedState, { data: data.lobbies });
  } else if (data.lobby) {
    modifiedState = addLobby(modifiedState, data.lobby);
  } else if (data.lobby_id) {
    modifiedState = removeLobby(modifiedState, data.lobby_id);
  }

  return modifiedState;
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
