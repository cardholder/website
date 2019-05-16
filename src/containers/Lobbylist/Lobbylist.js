import React, { Component } from "react";
import { Container, Button, Row } from "reactstrap";
import Searchbar from "../../components/Searchbar/Searchbar";
import LobbylistItems from "./LobbylistItems/LobbylistItems";

import classes from "./Lobbylist.css";

class Lobbylist extends Component {
  render() {
    return (
      <Container className={classes.Lobbylist}>
        <Row className={classes.Row}>
          <div className={classes.Header}>
            <Button className="sm">Lobby erstellen</Button>
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

export default Lobbylist;
