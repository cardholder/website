import * as actionTypes from "./actionTypes";

export const create = (url) => {
    const websocket = new WebSocket(url);
    return dispatch => {
        websocket.onopen = () => dispatch({ type: actionTypes.LOBBY_OPEN, websocket: websocket });
        websocket.onclose = (event) => dispatch({ type: actionTypes.LOBBY_CLOSE });
        websocket.onmessage = (event) => dispatch({ type: actionTypes.LOBBY_MESSAGE, data: event.data });
        websocket.onerror = (event) => dispatch({ type: actionTypes.LOBBY_BROKEN })
    }
}

export const lobbyCreateDisconnect = () => {
    return {
        type: actionTypes.LOBBY_DISCONNECT
    }
}

export const sendSettings = (settings) => {
    return {
        type: actionTypes.LOBBY_SEND,
        message: settings
    }
}