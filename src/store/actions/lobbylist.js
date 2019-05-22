import * as actionTypes from './actionTypes';

let websocket = null;

export const connect = (url) => {
    websocket = new WebSocket(url);
    return dispatch => {

        // Attach the callbacks
        websocket.onopen = () => dispatch({ type: actionTypes.OPEN_LOBBYLIST, websocket: websocket });
        websocket.onclose = (event) => dispatch({ type: actionTypes.CLOSED_LOBBYLIST });
        websocket.onmessage = (event) => dispatch({ type: actionTypes.MESSAGE_LOBBYLIST, lobbies: event.data });
    }
} 

export const disconnect = () => {
    return {
        type: actionTypes.DISCONNECT_LOBBYLIST
    }
}