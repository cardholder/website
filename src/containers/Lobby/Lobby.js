import React, { Component } from "react";

import { connect } from "react-redux";

import * as lobbyActions from "../../store/actions/lobby"
import * as config from "../../config";

class Lobby extends Component {
  state = {
    sent: false
  };

  componentDidMount() {
    this.props.connect(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  render() {
    let regex = new RegExp("lobby/[\\w]+/", "i");
    if (
      this.props.username &&
      this.props.connected &&
      this.props.websocket != null &&
      regex.test(this.props.websocket.url)
    ) {
      this.props.sendMessage({ name: this.props.username });
    }
    return <h1>{this.props.match.params.id}</h1>;
  }
}

const mapStateToProps = state => ({
  id: state.lobby.id,
  lobby: state.lobby.data,
  websocket: state.lobby.websocket,
  connected: state.lobby.connected,
  error: state.lobby.error,
  username: state.general.username,
  status: state.lobby.status
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
