import * as actionTypes from "./actionTypes";

export const connect = (url, status) => {
    const websocket = new WebSocket(url);
    return dispatch => {
        websocket.onopen = () => dispatch({ type: actionTypes.CREATE_OPEN, websocket: websocket });
        websocket.onclose = (event) => dispatch({ type: actionTypes.CREATE_CLOSE });
        websocket.onmessage = (event) => dispatch({ type: actionTypes.CREATE_MESSAGE, data: event.data });
        websocket.onerror = (event) => dispatch({ type: actionTypes.CREATE_BROKEN })
    }
}

export const lobbyDisconnect = () => {
    return {
        type: actionTypes.CREATE_DISCONNECT
    }
}

export const sendSettings = (settings) => {
    return {
        type: actionTypes.CREATE_SEND,
        message: settings
    }
}