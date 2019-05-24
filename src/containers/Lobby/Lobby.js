import React, { Component } from "react";

class Lobby extends Component {
  render() {
    return <h1>{this.props.match.params.id}</h1>;
  }
}

export default Lobby;
