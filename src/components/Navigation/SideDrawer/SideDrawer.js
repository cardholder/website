import React, { Fragment } from "react";

import Logo from "../../../assets/logo.png";
import Title from "../../Title/Title";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import NavigationItems from "../NavigationItems/NavigationItems";
import Footer from "../../Footer/Footer";
import { HamburgerButton } from "react-hamburger-button";

import classes from "./SideDrawer.css";

const sideDrawer = props => {
  let attachedClasses = classes.Close;
  if (props.open) {
    attachedClasses = classes.Open;
  }

  return (
    <Fragment>
      <div className={[classes.SideDrawer, attachedClasses].join(" ")}>
        <Title>
          <NavigationItem to="/" exact>
            <img src={Logo} alt="logo" />
          </NavigationItem>
          <NavigationItem to="/" exact>
            cardholder
          </NavigationItem>
        </Title>
        <NavigationItems />

        <Footer />

        {window.innerWidth <= 768 ? (
          <div
            onClick={props.closed}
            className={[classes.Icon, attachedClasses].join(" ")}
          >
            <HamburgerButton
              open={props.open}
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
