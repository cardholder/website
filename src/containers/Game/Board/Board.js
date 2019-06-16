import React from "react";
import classes from "./Board.css";

const board = props => <div className={classes.Board}>{props.children}</div>;

export default board;
