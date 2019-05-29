import React, { Component } from "react";
import { withRouter } from "react-router";

import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);

    let showSideDrawer = true;

    if (window.innerWidth <= 768) {
      showSideDrawer = false;
    }

    this.state = {
      showSideDrawer: showSideDrawer
    };
  }

  sideDrawerHandler = event => {
    this.setState(prev => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.pathname !== this.props.location.pathname &&
      window.innerWidth <= 768
    ) {
      this.setState({
        showSideDrawer: false
      });
    } else {
      this.setState({
        showSideDrawer: true
      });
    }
  }

  render() {
    return (
      <div className={classes.Layout}>
        <div className={classes.SideDrawer}>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerHandler}
          />
        </div>

        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}

export default withRouter(Layout);
