import React from "react";

import Card from "../Card/Card";
import posed from "react-pose";
import leaderImg from "../../../../assets/crown.svg";
import classes from "./Player.css";

const player = (props) => {
  let cards = [];
  for (let i = 0; i < props.player.card_amount; i++) {
    cards.push(<Card key={i} hide />);
  }

  const Box = posed.div({
    init: { y: 0 },
    current: { y: 0 }
  });

  return (
    <Box
      pose={
        props.current_player && props.player.id === props.current_player.id
          ? "current"
          : "init"
      }
    >
      {props.isBottom ? <article /> : null}
      <section
        className={
          props.current_player.id === props.player.id
            ? classes.CurrentPlayer
            : null
        }
      >
        {!props.isBottom ? (
          <section>
            {props.player !== null && props.player.role === "leader" ? (
              <img src={leaderImg} alt="leader" />
            ) : null}
            <p>{props.player.name}</p>
          </section>
        ) : null}
        <div>{cards}</div>
        {props.isBottom ? (
          <section>
            {props.player !== null && player.role === "leader" ? (
              <img src={leaderImg} alt="leader" />
            ) : null}
            <p>{props.player.name}</p>
          </section>
        ) : null}
      </section>
    </Box>
  );
};

export default player;