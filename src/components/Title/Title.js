import React from "react";

import classes from "./Title.css";

const title = props => (
  <div className={classes.Title}>
    <h1>{props.children}</h1>
  </div>
);

export default title;
