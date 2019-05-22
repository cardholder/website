const BROKEN = "BROKEN";
const CLOSED = "CLOSED";
const CONNECT = "CONNECT";
const DISCONNECT = "DISCONNECT";
const MESSAGE = "MESSAGE";
const OPEN = "OPEN";
const SEND = "SEND";

export const SET_USERNAME = "SET_USERNAME";

export const LOBBYLIST_PREFIX = "LOBBYLIST";
export const CONNECT_LOBBYLIST = LOBBYLIST_PREFIX + "::" + CONNECT;
export const DISCONNECT_LOBBYLIST = LOBBYLIST_PREFIX + "::" + DISCONNECT;
export const MESSAGE_LOBBYLIST = LOBBYLIST_PREFIX + "::" + MESSAGE;
export const BROKEN_LOBBYLIST = LOBBYLIST_PREFIX + "::" + BROKEN;
export const CLOSED_LOBBYLIST = LOBBYLIST_PREFIX + "::" + CLOSED;
export const OPEN_LOBBYLIST = LOBBYLIST_PREFIX + "::" + OPEN;
export const SEND_LOBBYLIST = LOBBYLIST_PREFIX + "::" + SEND;
