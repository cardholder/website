import React, { Component } from "react";

import { connect } from "react-redux";

import { Container, Button, Row } from "reactstrap";
import Searchbar from "../../components/Searchbar/Searchbar";
import LobbylistItems from "./LobbylistItems/LobbylistItems";
import { Link } from "react-router-dom";

import { connect as connectLobbylist, disconnect } from "../../store/actions/lobbylist";
import * as config from "../../config";

import classes from "./Lobbylist.css";

class Lobbylist extends Component {
  componentDidMount() {
    this.props.connect();

    console.log(this.props)
  }

  disconnect = () => {
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
            <Button onClick={this.disconnect} className="sm">
              X
            </Button>
            <div className={classes.Searchbar}>
              <Searchbar />
            </div>
          </div>

          <div className={classes.LobbylistItems}>
            <LobbylistItems />
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbylist.lobbies,
  url: state.lobbylist.url,
  websocket: state.lobbylist.websocket,
  connected: state.lobbylist.connected
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(connectLobbylist(config.SOCKET_API + "lobbylist/")),
  disconnect: () => dispatch(disconnect())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobbylist);
