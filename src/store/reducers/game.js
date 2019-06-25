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
  message: "",
  remaining_cards: 0,
  cards: [],
  current_player: null,
  players: null,
  top_card_of_discard_pile: null,
  symbol: null
};

const updatePlayer = (state, player) => {
  let playerIndex = state.players.findIndex(obj => obj.id === player.id);
  let players = [...state.players];
  players[playerIndex].card_amount = player.card_amount;
  return updateObject(state, { players: players });
};

const onMessage = (state, action) => {
  let data = JSON.parse(action.data);
  let modifiedState = state;

  if (data.cards) {
    modifiedState = updateObject(modifiedState, {
      cards: data.cards
    });
  }

  if (data.current_player) {
    modifiedState = updateObject(modifiedState, {
      current_player: data.current_player
    });
  }

  if (data.top_card_of_discard_pile) {
    modifiedState = updateObject(modifiedState, {
      top_card_of_discard_pile: data.top_card_of_discard_pile
    });
  }

  if (data.cards_drawn) {
    let cards = [...state.cards];

    modifiedState = updateObject(modifiedState, {
      cards: cards.concat(data.cards_drawn)
    });
  }

  if (data.remaining_cards) {
    modifiedState = updateObject(modifiedState, {
      remaining_cards: data.remaining_cards
    });
  }

  if (data.players) {
    modifiedState = updateObject(modifiedState, {
      players: data.players
    });
  }

  if (data.player) {
    modifiedState = updatePlayer(modifiedState, data.player);
  }

  if (data.message) {
    modifiedState = updateObject(modifiedState, {
      message: data.message
    });
  }

  if (data.symbol) {
    modifiedState = updateObject(modifiedState, {
      symbol: data.symbol
    });
  }

  return modifiedState;
};

export const onDisconnect = (state, action) => {
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
    case actionTypes.GAME_ERROR:
      return updateObject(state, { message: action.message });
    case actionTypes.GAME_SYMBOL:
      return updateObject(state, { symbol: null });
    default:
      return state;
  }
};

export default reducer;
