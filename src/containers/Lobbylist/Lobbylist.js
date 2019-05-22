import React, { Component } from "react";

import { connect } from "react-redux";

import { Container, Button, Row, Alert } from "reactstrap";
import Searchbar from "../../components/Searchbar/Searchbar";
import LobbylistItems from "./LobbylistItems/LobbylistItems";
import { Link } from "react-router-dom";

import {
  connect as connectLobbylist,
  disconnect,
  sendMessage
} from "../../store/actions/lobbylist";
import * as config from "../../config";

import classes from "./Lobbylist.css";

class Lobbylist extends Component {
  componentDidMount() {
    this.props.connect();
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  render() {
    return (
      <Container className={classes.Lobbylist}>
        <Row className={classes.Row}>
          <div className={classes.Header}>
            <Link to="/lobby/create">
              <Button className="sm">Lobby erstellen</Button>
            </Link>
            <Button onClick={() => { this.props.sendMessage("Hello") }} className="sm">X</Button>
            <div className={classes.Searchbar}>
              <Searchbar />
            </div>
          </div>
          {this.props.error ? (
            <div className={classes.Error}>
              <Alert color="danger">
                Es konnte keine Verbindung zum Server aufgebaut werden!
              </Alert>
            </div>
          ) : (
            <div className={classes.LobbylistItems}>
              <LobbylistItems />
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbylist.lobbies,
  url: state.lobbylist.url,
  websocket: state.lobbylist.websocket,
  connected: state.lobbylist.connected,
  error: state.lobbylist.error
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(connectLobbylist(config.SOCKET_API + "lobbylist/")),
  disconnect: () => dispatch(disconnect()),
  sendMessage: (message) => dispatch(sendMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobbylist);
