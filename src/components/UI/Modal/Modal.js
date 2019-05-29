import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Button } from "reactstrap";
import Input from "../Input/Input";

import * as actions from "../../../store/actions/index";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  state = {
    username: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.username !== this.props.username ||
      nextState.username !== this.state.username
    );
  }

  abort = () => {
    this.props.history.push("/");
  };

  setUsername = () => {
    this.props.setUsername(this.state.username);
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return this.props.username === "" ? (
      <Fragment>
        <Backdrop show={this.props.username === ""} />
        <div
          className={classes.Modal}
          style={{
            transform:
              this.props.username === ""
                ? "translateY(0)"
                : "translateY(-100vh)",
            opacity: this.props.username === "" ? "1" : "0"
          }}
        >
          <h1>Username</h1>
          <Input
            placeholder={"Username eingeben"}
            value={this.state.username}
            onChange={this.onChangeUsername}
            onEnter={this.setUsername}
          />
          <section>
            <Button onClick={this.abort}>Abbrechen</Button>
            <Button
              onClick={this.setUsername}
              disabled={this.state.username === ""}
            >
              Bestätigen
            </Button>
          </section>
        </div>
      </Fragment>
    ) : null;
  }
}

const mapStateToProps = state => ({
  username: state.general.username
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(actions.setUsername(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Modal));
