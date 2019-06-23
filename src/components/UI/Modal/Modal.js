import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Button, Input as In } from "reactstrap";
import Input from "../Input/Input";

import * as actions from "../../../store/actions/general";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  constructor(props) {
    super(props);

    let username = localStorage.getItem("username");
    if (username) {
      props.setUsername(username);
    } else {
      username = "";
    }

    this.state = {
      username: username,
      remember: false,
      isValid: false,
      isTouched: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.username !== this.props.username ||
      nextState.username !== this.state.username
    );
  }

  abort = () => {
    this.props.history.push("/");
  };

  onChangeRemember = event => {
    this.setState(prevState => {
      return { remember: !prevState.remember };
    });
  };

  setUsername = () => {
    if (this.state.remember) {
      localStorage.setItem("username", this.state.username);
    }
    this.props.setUsername(this.state.username);
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value, isTouched: true });
    if (event.target.value.match("[a-zA-Z0-9_.]+") && event.target.value.length > 1 && event.target.value.length < 10) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
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
            <In
              className={classes.Input}
              type="checkbox"
              value={this.state.remember}
              onChange={this.onChangeRemember}
            />
            <p>Merken</p>
          </section>
          <section>
            <Button onClick={this.abort}>Abbrechen</Button>
            <Button
              onClick={this.setUsername}
              disabled={
                this.state.username === "" ||
                !this.state.isValid ||
                !this.state.isTouched
              }
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
