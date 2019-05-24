import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Lobbylist from "./containers/Lobbylist/Lobbylist";
import Imprint from "./components/Imprint/Imprint";
import LobbyCreate from './containers/Lobby/LobbyCreate/LobbyCreate';
import Lobby from './containers/Lobby/Lobby';

import "./App.css";

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/lobby" component={Lobbylist} exact />
          <Route path="/lobby/create" component={LobbyCreate} exact/>
          <Route path="/lobby/:id" component={Lobby} />
          <Route path="/imprint" component={Imprint} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
