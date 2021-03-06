import * as actionTypes from './actionTypes';

export const connect = (url) => {
    const websocket = new WebSocket(url);
    return dispatch => {
        websocket.onopen = () => dispatch({ type: actionTypes.OPEN_LOBBYLIST, websocket: websocket });
        websocket.onclose = (event) => dispatch({ type: actionTypes.CLOSED_LOBBYLIST });
        websocket.onmessage = (event) => dispatch({ type: actionTypes.MESSAGE_LOBBYLIST, data: event.data });
        websocket.onerror = (event) => dispatch({ type: actionTypes.BROKEN_LOBBYLIST })
    }
} 

export const disconnect = () => {
    return {
        type: actionTypes.DISCONNECT_LOBBYLIST
    }
}

export const sendMessage = (message) => {
    return {
        type: actionTypes.SEND_LOBBYLIST,
        message: message
    }
}

export const setErrorMessage = (message) => {
    return {
        type: actionTypes.ERROR_LOBBYLIST,
        message: message
    }
}