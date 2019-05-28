import React, { Component } from "react";

import { connect } from "react-redux";

import { Container, Button, Row, Alert } from "reactstrap";
import Searchbar from "../../components/Searchbar/Searchbar";
import LobbylistItems from "./LobbylistItems/LobbylistItems";
import { Link } from "react-router-dom";

import * as actions from "../../store/actions/index";
import * as config from "../../config";

import classes from "./Lobbylist.css";

export class Lobbylist extends Component {
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
          ) : this.props.lobbies != null && this.props.lobbies.length >= 1 ? (
            <div className={classes.LobbylistItems}>
              <LobbylistItems />
            </div>
          ) : (
            <div className={classes.Error}>
              <Alert color="danger">Keine Lobbies vorhanden!</Alert>
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbylist.data,
  websocket: state.lobbylist.websocket,
  connected: state.lobbylist.connected,
  error: state.lobbylist.error
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(actions.connect(config.SOCKET_API + "lobbylist/")),
  disconnect: () => dispatch(actions.disconnect()),
  sendMessage: message => dispatch(actions.sendMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobbylist);
