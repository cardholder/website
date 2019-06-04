import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import posed, { PoseGroup } from "react-pose";
import { withRouter } from "react-router-dom";
import LobbylistItem from "./LobbylistItem/LobbylistItem";

import classes from "./LobbylistItems.css";

export class LobbylistItems extends Component {
  onClickHandler = id => {
    this.props.history.push("/" + id);
  };

  render() {
    const Box = posed.div({
      hoverable: true,
      pressable: true,
      init: { y: 0 },
      hover: { y: -3 },
      press: {
        scale: 1.025
      }
    });

    let lobbies = null;
    if (this.props.lobbies && this.props.lobbies.length > 0) {
      lobbies = this.props.lobbies.map(lobby => (
        <Box
          key={lobby.id}
          className={[classes.LobbylistItems, "col-sm-6"].join(" ")}
        >
          <LobbylistItem
            onClick={this.onClickHandler}
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
        <Row className={classes.Lobbylist}>
          <PoseGroup>{lobbies}</PoseGroup>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbylist.data,
  url: state.lobbylist.url,
  websocket: state.lobbylist.websocket
});

export default connect(
  mapStateToProps,
  null
)(withRouter(LobbylistItems));
