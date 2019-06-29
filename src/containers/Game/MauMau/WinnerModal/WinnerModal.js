import React, { Fragment } from "react";
import { Button } from "reactstrap";
import Backdrop from "../../../../components/UI/Backdrop/Backdrop";
import classes from "./WinnerModal.css";

import Emoji from "../../../../components/UI/Emoji/Emoji";
import winnerImg from "../../../../assets/crown.svg";

const winnerModal = props =>
  props.show ? (
    <Fragment>
      <Backdrop show={props.show} />
      <div className={classes.WinnerModal}>
        {props.isWinner ? (
          <div>
            <img src={winnerImg} />
            <h2>Du hast gewonnen!</h2>
          </div>
        ) : (
          <div>
            <Emoji />
            <h2>Du hast verloren!</h2>
          </div>
        )}
        <Button onClick={props.onReturn}>Zurück zur Lobbyliste</Button>
      </div>
    </Fragment>
  ) : null;

export default winnerModal;
