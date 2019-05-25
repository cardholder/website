import { updateObject } from "../utility";

export const onOpen = (state, action) => {
  return updateObject(state, {
    websocket: action.websocket,
    connected: true,
    error: false
  });
};

export const onClose = (state, aciton) => {
  return updateObject(state, { conntected: false, lobbies: null });
};

export const setLobbies = (state, action) => {
  return updateObject(state, { lobbies: JSON.parse(action.lobbies).lobbies });
};

export const onDisconnect = (state, action) => {
  if (state.websocket) {
    state.websocket.close();
  }
  return updateObject(state, { conntected: false });
};

export const onError = (state, action) => {
  return updateObject(state, { error: true });
};

export const onSendMessage = (state, action) => {
  if (state.websocket) {
    state.websocket.send(JSON.stringify(action.message));
  }

  return state;
};
