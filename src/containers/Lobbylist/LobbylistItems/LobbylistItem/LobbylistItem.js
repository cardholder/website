import React from "react";

import classes from "./LobbylistItem.css";

import playButton from "../../../../assets/play-arrow.svg";

const lobbylistItem = props => (
  <div onClick={() => props.onClick(props.id)} className={classes.LobbylistItem}>
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
