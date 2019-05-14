import React, { Fragment }  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Lobbylist from './containers/Lobbylist/Lobbylist';

import './App.css';


function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => ( <Redirect to="/lobby"/> )}/>
          <Route path="/lobby" component={ Lobbylist } />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
