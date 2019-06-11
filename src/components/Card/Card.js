import React from "react";
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

  let obj = cardTypes.clubs;

  let Box = posed.div({
    draggable: true
  });

  console.log(props.fontSize);

  return (
    <Box
      style={{
        height: props.height !== undefined ? props.height : 90,
        width: props.width !== undefined ? props.width : 60,
        fontSize: props.fontSize !== undefined ? props.fontSize : 16
      }}
      className={[classes.Card, obj.class].join(" ")}
    >
      <section>
        <div>
          <span>7</span>
          {obj.text}
        </div>
      </section>
      <section>
        <div>
          <span>7</span>
          {obj.text}
        </div>
      </section>
    </Box>
  );
};

export default card;
