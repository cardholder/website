import React from "react";
import { Container, Row } from "reactstrap";
import LobbylistItem from "./LobbylistItem/LobbylistItem";

import classes from "./LobbylistItems.css";

const lobbylistItems = () => (
  <Container>
    <Row className={ classes.Lobbylist }>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
      <div className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
        <LobbylistItem
          id={"dfjs3"}
          game={"Mau-Mau"}
          maxPlayers={4}
          actualPlayers={2}
        />
      </div>
    </Row>
  </Container>
);

export default lobbylistItems;
