import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { StyleRoot } from "radium";

import generalReducer from "./store/reducers/general";
import lobbylistReducer from "./store/reducers/lobbylist";
import lobbyReducer from "./store/reducers/lobby";
import createReducer from "./store/reducers/create";
import gameReducer from "./store/reducers/game";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  general: generalReducer,
  lobbylist: lobbylistReducer,
  lobby: lobbyReducer,
  create: createReducer,
  game: gameReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <StyleRoot>
        <App />
      </StyleRoot>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
