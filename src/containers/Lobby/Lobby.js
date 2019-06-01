import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import * as config from "../../config";

class Lobby extends Component {
  componentDidMount() {
    this.props.connect(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  render() {
    if (this.props.username && this.props.connected) {
      this.props.sendMessage({ name: this.props.username });
    }
    return <h1>{this.props.match.params.id}</h1>;
  }
}

const mapStateToProps = state => ({
  id: state.lobby.id,
  websocket: state.lobby.websocket,
  connected: state.lobby.connected,
  error: state.lobby.error,
  username: state.general.username
});

const mapDispatchToProps = dispatch => ({
  connect: id =>
    dispatch(actions.create(config.SOCKET_API + "lobby/" + id + "/")),
  disconnect: () => dispatch(actions.lobbyDisconnect()),
  sendMessage: settings => dispatch(actions.sendSettings(settings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
