import React, { Fragment } from "react";

import Title from "../../Title/Title";
import NavigationItems from "../NavigationItems/NavigationItems";
import Footer from "../../Footer/Footer";
import { HamburgerButton } from 'react-hamburger-button';

import classes from "./SideDrawer.css";

const sideDrawer = props => {
  let attachedClasses = classes.Close;
  if (props.open) {
    attachedClasses = classes.Open;
  }

  return (
    <Fragment>
      <div className={[classes.SideDrawer, attachedClasses].join(" ")}>
        <Title>cardholder</Title>
        <NavigationItems />

        <Footer />

        {window.innerWidth <= 768 ? (
          <div className={[classes.Icon, attachedClasses].join(" ")}>
            <HamburgerButton
              open={props.open}
              onClick={props.closed}
              height="25"
              color="black"
              animationDuration={0.5}
            />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default sideDrawer;
