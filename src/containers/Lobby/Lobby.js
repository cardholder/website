import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import Modal from "../../components/UI/Modal/Modal";
import * as lobbyActions from "../../store/actions/lobby";
import * as config from "../../config";

class Lobby extends Component {
  state = {
    sent: false,
    connected: true
  };

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
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  render() {
    return (
      <Fragment>
        <Modal />
        <h1>{this.props.match.params.id}</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  id: state.lobby.id,
  lobby: state.lobby.data,
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
