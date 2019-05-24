import React from "react";

import classes from "./Label.css";

const label = props => <h2 className={classes.Label}>{props.children}</h2>;

export default label;
