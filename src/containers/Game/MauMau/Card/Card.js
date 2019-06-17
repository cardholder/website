import React, { Fragment, Component } from "react";
import posed from "react-pose";
import cover from "../../../../assets/cover.svg";

import classes from "./Card.css";

class Card extends Component {
  state = {
    onTurn: this.props.onTurn
  }

  cardTypes = {
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

  onTurnHandler = () => {
    this.setState({onTurn: true})
  }

  render() {
    let Box = posed.div({
      hoverable: this.props.isHoverable,
      init: { y: 0 },
      hover: { y: -20 }
    });
  
    let card = null;
    let currentCard = this.cardTypes.heart;
  
    switch (this.props.symbol) {
      case "d":
        currentCard = this.cardTypes.diamonds;
        break;
      case "c":
        currentCard = this.cardTypes.clubs;
        break;
      case "s":
        currentCard = this.cardTypes.spades;
        break;
      case "h":
        currentCard = this.cardTypes.heart;
        break;
      default:
        currentCard = this.cardTypes.heart;
        break;
    }
  
    if (this.props.hide) {
      card = (
        <Fragment>
          <section className={classes.Hide}>
            <img src={cover} alt="cover" />
          </section>
        </Fragment>
      );
    } else {
      card = (
        <div onClick={this.onTurnHandler}>
          <section>
            <div>
              <span>{this.props.value}</span>
              {currentCard.text}
            </div>
          </section>
          <section>
            <div>
              <span>{this.props.value}</span>
              {currentCard.text}
            </div>
          </section>
        </div>
      );
    }
  
    return (
      <Box
        style={{
          height: this.props.height !== undefined ? this.props.height : 90,
          width: this.props.width !== undefined ? this.props.width : 60,
          fontSize: this.props.fontSize !== undefined ? this.props.fontSize : 16
        }}
        className={[classes.Card, currentCard.class, this.state.onTurn ? classes.OnTurn : null].join(" ")}
      >
        {card}
      </Box>
    );
  }
};

export default Card;
