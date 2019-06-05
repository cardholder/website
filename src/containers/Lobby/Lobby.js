import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import Modal from "../../components/UI/Modal/Modal";
import * as lobbyActions from "../../store/actions/lobby";
import * as config from "../../config";
import copyImg from "../../assets/copy.svg";
import copy from "copy-to-clipboard";

import posed from "react-pose";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./Lobby.css";

class Lobby extends Component {
  state = {
    sent: false,
    connected: true
  };

  copyRef = null;

  componentDidMount() {
    this.props.connect(this.props.match.params.id);
    if (!this.state.connected) {
      this.setState({ connected: true });
    }
  }

  componentDidUpdate() {
    if (
      this.props.username &&
      this.props.connected &&
      this.state.connected &&
      !this.state.sent
    ) {
      this.props.sendMessage({ name: this.props.username });
      this.setState({
        sent: true
      });
    }

    console.log(this.props);
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  render() {
    const Box = posed.div({
      hoverable: true,
      pressable: true,
      init: { scale: 1 },
      press: { scale: 2 }
    });

    return (
      <Fragment>
        <Modal />
        <div className={classes.Lobby}>
          <section className={classes.Header}>
            <h1>Lobby</h1>
            <div>
              <hr />
            </div>
            <section>
              <h2 ref={copyRef => (this.copyRef = copyRef)}>
                {window.location.origin + "/" + this.props.match.params.id}
              </h2>
              <Box>
                <img
                  onClick={() =>
                    copy(
                      window.location.origin + "/" + this.props.match.params.id
                    )
                  }
                  src={copyImg}
                  alt="copy"
                />
              </Box>
            </section>
          </section>
          <main>
            <div>
              Kartenspiel{" "}
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  id: state.lobby.id,
  lobby_id: state.lobby.lobby_id,
  player_id: state.lobby.player_id,
  visibility: state.lobby.visibility,
  max_players: state.lobby.max_players,
  game: state.lobby.game,
  players: state.lobby.players,
  websocket: state.lobby.websocket,
  connected: state.lobby.connected,
  error: state.lobby.error,
  username: state.general.username
});

const mapDispatchToProps = dispatch => ({
  connect: id =>
    dispatch(lobbyActions.connect(config.SOCKET_API + "lobby/" + id + "/")),
  disconnect: () => dispatch(lobbyActions.lobbyDisconnect()),
  sendMessage: message => dispatch(lobbyActions.sendMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
