import React from "react";

import classes from "./LobbylistItem.css";

import playButton from "../../../../assets/play-arrow.svg";

const lobbylistItem = props => (
  <div className={classes.LobbylistItem}>
    <div>
      <p>{props.game}</p>
      <p>
        {props.actualPlayers} / {props.maxPlayers} Spieler
      </p>
    </div>
    <div className={classes.Icon}>
      <img src={playButton} alt="Join" />
    </div>
  </div>
);

export default lobbylistItem;
