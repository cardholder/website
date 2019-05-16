import React from "react";

import classes from "./StoreLogo.css";

const storeLogo = props => (
  <div className={classes.StoreLogo}>
    <img alt={props.alt} src={props.path} height={props.height} />
  </div>
);

export default storeLogo;
