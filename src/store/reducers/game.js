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
  symbol: null,
  winner: null
};

const sortCards = (a, b) => {
  let cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    B: 11,
    D: 12,
    K: 13,
    A: 14
  };

  let cardSymbols = {
    h: 1,
    s: 2,
    d: 3,
    c: 4
  };

  if (a.symbol !== b.symbol) {
    return cardSymbols[a.symbol] - cardSymbols[b.symbol];
  } else {
    return cardValues[a.value] - cardValues[b.value];
  }
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
    let sortedCards = data.cards.sort(sortCards);

    modifiedState = updateObject(modifiedState, {
      cards: sortedCards
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
    let tmp = cards.concat(data.cards_drawn);
    let sortedCards = tmp.sort(sortCards);

    modifiedState = updateObject(modifiedState, {
      cards: sortedCards
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

  if (data.id) {
    modifiedState = updateObject(modifiedState, {
      winner: data.id
    });
  }

  return modifiedState;
};

export const onDisconnect = (state, action) => {
  if (state.websocket) {
    state.websocket.close();
  }
  return updateObject(state, {
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
    symbol: null,
    winner: null
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
