import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Lobbylist from "./containers/Lobbylist/Lobbylist";
import Imprint from "./components/Imprint/Imprint";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lobby" component={Lobbylist} />
          <Route path="/imprint" component={Imprint} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
