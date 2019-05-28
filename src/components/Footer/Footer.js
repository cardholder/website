import React from "react";
import NavigationItem from "../Navigation/NavigationItems/NavigationItem/NavigationItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.css";

const footer = () => (
  <div className={classes.Footer}>
    <div className={classes.Github}>
      <a href="https://github.com/cardholder">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
    <NavigationItem to="/imprint" exact>
      Impressum
    </NavigationItem>
  </div>
);

export default footer;
