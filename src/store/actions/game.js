import * as actionTypes from "./actionTypes";

export const connect = (url, status) => {
    const websocket = new WebSocket(url);
    return dispatch => {
        websocket.onopen = () => dispatch({ type: actionTypes.GAME_OPEN, websocket: websocket });
        websocket.onclose = (event) => dispatch({ type: actionTypes.GAME_CLOSE });
        websocket.onmessage = (event) => dispatch({ type: actionTypes.GAME_MESSAGE, data: event.data });
        websocket.onerror = (event) => dispatch({ type: actionTypes.GAME_BROKEN })
    }
}

export const disconnect = () => {
    return {
        type: actionTypes.GAME_DISCONNECT
    }
}

export const sendMessage = (message) => {
    return {
        type: actionTypes.GAME_SEND,
        message: message
    }
}

export const setErrorMessage = (message) => {
    return {
        type: actionTypes.GAME_ERROR,
        message: message
    }
}

export const resetSymbol = () => {
    return {
        type: actionTypes.GAME_SYMBOL,
    }
}