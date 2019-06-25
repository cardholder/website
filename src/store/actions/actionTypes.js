const BROKEN = "BROKEN";
const CLOSED = "CLOSED";
const CONNECT = "CONNECT";
const DISCONNECT = "DISCONNECT";
const MESSAGE = "MESSAGE";
const OPEN = "OPEN";
const SEND = "SEND";

export const SET_USERNAME = "GENERAL::USERNAME";
export const SET_PLAYERID = "GERERAL::PLAYERID"

export const LOBBYLIST_PREFIX = "LOBBYLIST";
export const CONNECT_LOBBYLIST = LOBBYLIST_PREFIX + "::" + CONNECT;
export const DISCONNECT_LOBBYLIST = LOBBYLIST_PREFIX + "::" + DISCONNECT;
export const MESSAGE_LOBBYLIST = LOBBYLIST_PREFIX + "::" + MESSAGE;
export const BROKEN_LOBBYLIST = LOBBYLIST_PREFIX + "::" + BROKEN;
export const CLOSED_LOBBYLIST = LOBBYLIST_PREFIX + "::" + CLOSED;
export const OPEN_LOBBYLIST = LOBBYLIST_PREFIX + "::" + OPEN;
export const SEND_LOBBYLIST = LOBBYLIST_PREFIX + "::" + SEND;
export const ERROR_LOBBYLIST = LOBBYLIST_PREFIX + "::ERROR";

export const CREATE_PREFIX = "CREATE";
export const CREATE_CONNECT = CREATE_PREFIX + "::" + CONNECT;
export const CREATE_MESSAGE = CREATE_PREFIX + "::" + MESSAGE;
export const CREATE_BROKEN = CREATE_PREFIX + "::" + BROKEN;
export const CREATE_OPEN = CREATE_PREFIX + "::" + OPEN;
export const CREATE_SEND = CREATE_PREFIX + "::" + SEND;
export const CREATE_DISCONNECT = CREATE_PREFIX + "::" + DISCONNECT;
export const CREATE_CLOSE = CREATE_PREFIX + "::" + CLOSED;

export const LOBBY_PREFIX = "LOBBY";
export const LOBBY_CONNECT = LOBBY_PREFIX + "::" + CONNECT;
export const LOBBY_MESSAGE = LOBBY_PREFIX + "::" + MESSAGE;
export const LOBBY_BROKEN = LOBBY_PREFIX + "::" + BROKEN;
export const LOBBY_OPEN = LOBBY_PREFIX + "::" + OPEN;
export const LOBBY_SEND = LOBBY_PREFIX + "::" + SEND;
export const LOBBY_DISCONNECT = LOBBY_PREFIX + "::" + DISCONNECT;
export const LOBBY_CLOSE = LOBBY_PREFIX + "::" + CLOSED;

export const GAME_PREFIX = "GAME";
export const GAME_CONNECT = GAME_PREFIX + "::" + CONNECT;
export const GAME_MESSAGE = GAME_PREFIX + "::" + MESSAGE;
export const GAME_BROKEN = GAME_PREFIX + "::" + BROKEN;
export const GAME_OPEN = GAME_PREFIX + "::" + OPEN;
export const GAME_SEND = GAME_PREFIX + "::" + SEND;
export const GAME_DISCONNECT = GAME_PREFIX + "::" + DISCONNECT;
export const GAME_CLOSE = GAME_PREFIX + "::" + CLOSED;
export const GAME_ERROR = GAME_PREFIX + "::ERROR";
export const GAME_SYMBOL = GAME_PREFIX + "::SYMBOL";