import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { Container, Button, Row, Alert } from "reactstrap";
import Searchbar from "../../components/Searchbar/Searchbar";
import LobbylistItems from "./LobbylistItems/LobbylistItems";
import { Link } from "react-router-dom";
import Modal from "../../components/UI/Modal/Modal";
import Emoji from "../../components/UI/Emoji/Emoji";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import * as actions from "../../store/actions/lobbylist";
import * as config from "../../config";

import classes from "./Lobbylist.css";

export class Lobbylist extends Component {
  state = {
    showedError: false
  };

  componentDidMount() {
    this.props.connect();
    this.showError();
  }

  componentDidUpdate() {
    this.showError();
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  showError = () => {
    if (this.props.errorMessage !== "" && !this.state.showedError) {
      let message = this.props.errorMessage === "You got kicked!" ? "Du wurdest gekickt!" : "Die Lobby ist bereits voll!";

      NotificationManager.error(
        message,
        "",
        3000
      );
      this.setState({
        showedError: true
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Modal />
        <Container className={classes.Lobbylist}>
          <Row className={classes.Row}>
            <div className={classes.Header}>
              <Link to="/lobby/create">
                <Button className="sm">Lobby erstellen</Button>
              </Link>
              {false ? (
                <div className={classes.Searchbar}>
                  <Searchbar />
                </div>
              ) : null}
            </div>
            {this.props.error || !this.props.connected ? (
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
                <Emoji />

                <div className={classes.Sadly}>
                  Es existiert noch keine Lobby.
                </div>
              </div>
            )}
          </Row>
        </Container>

        <NotificationContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbylist.data,
  websocket: state.lobbylist.websocket,
  connected: state.lobbylist.connected,
  error: state.lobbylist.error,
  errorMessage: state.lobbylist.errorMessage
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(actions.connect(config.SOCKET_API + "lobbylist/")),
  disconnect: () => dispatch(actions.disconnect()),
  sendMessage: message => dispatch(actions.sendMessage(message)),
  setError: message => dispatch(actions.setErrorMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobbylist);
