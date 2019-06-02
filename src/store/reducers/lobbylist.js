import * as actionTypes from "../actions/actionTypes";
import * as ws from "./socket";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  websocket: null,
  connected: false,
  error: false
};

const sortLobby = (state) => {
  let lobbies = [...state.data];
  lobbies.sort((a, b) => {
    return a.players.length - b.players.length;
  });

  return updateObject(state, { data: lobbies});
}

const removeLobby = (state, lobby_id) => {
  let lobbies = [...state.data];
  lobbies = lobbies.filter(lobby => lobby.id !== lobby_id);
  return updateObject(state, { data: lobbies });
};

const updateLobby = (state, lobby) => {
  let lobbies = [...state.data];
  removeLobby(state, lobby.id);
  lobbies.push(lobby);
  return updateObject(state, { data: lobbies });
};

export const setLobbies = (state, action) => {
  let modifiedState = state;
  let data = JSON.parse(action.data);

  if (data.lobbies) {
    modifiedState = updateObject(modifiedState, { data: data.lobbies });
  } else if (data.lobby) {
    modifiedState = updateLobby(modifiedState, data.lobby);
  } else if (data.lobby_id) {
    modifiedState = removeLobby(modifiedState, data.lobby_id);
  }

  return sortLobby(modifiedState);
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
