import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import posed from "react-pose";
import LobbylistItem from "./LobbylistItem/LobbylistItem";

import classes from "./LobbylistItems.css";

class lobbylistItems extends Component {
  render() {
    const Box = posed.div({
      hoverable: true,
      pressable: true,
      init: {
        scale: 1
      },
      hover: {
        scale: 1.025
      },
      press: {
        scale: 1.025
      },
    });

    let lobbies = null;
    if (this.props.lobbies) {
      lobbies = this.props.lobbies.map(lobby => (
        <Box
          key={lobby.id}
          className={[classes.LobbylistItems, "col-sm-6"].join(" ")}
        >
          <LobbylistItem
            id={lobby.id}
            game={lobby.game}
            maxPlayers={lobby.max_players}
            actualPlayers={lobby.players.length}
          />
        </Box>
      ));
    }

    return (
      <Container>
        <Row className={classes.Lobbylist}>{lobbies}</Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbylist.lobbies,
  url: state.lobbylist.url,
  websocket: state.lobbylist.websocket
});

export default connect(
  mapStateToProps,
  null
)(lobbylistItems);
