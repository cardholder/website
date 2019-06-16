import React, { Fragment } from "react";
import posed from "react-pose";

import classes from "./Card.css";

const card = props => {
  const cardTypes = {
    heart: {
      text: <span>&hearts;</span>,
      color: "Red",
      class: classes.Red
    },
    spades: {
      text: <span>&spades;</span>,
      color: "Black",
      class: classes.Black
    },
    clubs: {
      text: <span>&clubs;</span>,
      color: "Black",
      class: classes.Black
    },
    diamonds: {
      text: <span>&diams;</span>,
      color: "Red",
      class: classes.Red
    }
  };

  let Box = posed.div({
    hoverable: props.isHoverable,
    init: { y: 0 },
    hover: { y: -20 }
  });

  let card = null;
  let currentCard = cardTypes.heart;

  switch (props.symbol) {
    case "d":
      currentCard = cardTypes.diamonds;
      break;
    case "c":
      currentCard = cardTypes.clubs;
      break;
    case "s":
      currentCard = cardTypes.spades;
      break;
    case "h":
      currentCard = cardTypes.heart;
      break;
    default:
      currentCard = cardTypes.heart;
      break;
  }

  if (props.hide) {
    card = (
      <Fragment>
        <section className={classes.Hide}>
          <div>
            <span className={cardTypes.heart.class}>
              {cardTypes.heart.text}
            </span>
            <span className={cardTypes.spades.class}>
              {cardTypes.spades.text}
            </span>
          </div>
          <div>
            <span className={cardTypes.clubs.class}>
              {cardTypes.clubs.text}
            </span>
            <span className={cardTypes.diamonds.class}>
              {cardTypes.diamonds.text}
            </span>
          </div>
        </section>
      </Fragment>
    );
  } else {
    card = (
      <Fragment>
        <section>
          <div>
            <span>{props.value}</span>
            {currentCard.text}
          </div>
        </section>
        <section>
          <div>
            <span>{props.value}</span>
            {currentCard.text}
          </div>
        </section>
      </Fragment>
    );
  }

  return (
    <Box
      style={{
        height: props.height !== undefined ? props.height : 90,
        width: props.width !== undefined ? props.width : 60,
        fontSize: props.fontSize !== undefined ? props.fontSize : 16
      }}
      className={[classes.Card, currentCard.class].join(" ")}
    >
      {card}
    </Box>
  );
};

export default card;
