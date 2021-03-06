import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem to="/lobby" exact>
      Lobbyliste
    </NavigationItem>
  </ul>
);

export default navigationItems;
