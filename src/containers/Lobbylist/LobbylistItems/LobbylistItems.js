import React from "react";
import { Container, Row } from "reactstrap";
import posed from 'react-pose';
import LobbylistItem from "./LobbylistItem/LobbylistItem";

import classes from "./LobbylistItems.css";

const lobbylistItems = () => {
  const Box = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1
    },
    hover: {
      scale: 1.05
    },
    press: {
      scale: 1.025
    }
  });

  return (
    <Container>
      <Row className={classes.Lobbylist}>
        <Box className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
          <LobbylistItem
            id={"dfjs3"}
            game={"Mau-Mau"}
            maxPlayers={4}
            actualPlayers={2}
          />
        </Box>
        <Box className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
          <LobbylistItem
            id={"dfjs3"}
            game={"Mau-Mau"}
            maxPlayers={4}
            actualPlayers={2}
          />
        </Box>
        <Box className={[classes.LobbylistItems, "col-sm-6"].join(" ")}>
          <LobbylistItem
            id={"dfjs3"}
            game={"Mau-Mau"}
            maxPlayers={4}
            actualPlayers={2}
          />
        </Box>
      </Row>
    </Container>
  );
};

export default lobbylistItems;
