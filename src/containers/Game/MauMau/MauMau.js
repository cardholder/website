import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "./Card/Card";
import leaderImg from "../../../assets/crown.svg";
import * as gameActions from "../../../store/actions/game";
import * as config from "../../../config";

class MauMau extends Component {
  state = {
    sent: false
  };

  boxShadow = 4 * 0.16;

  sendPlayerInformations = () => {
    console.log(this.props.player_id);

    if (this.props.player_id <= -1) {
      this.props.history.push("/lobby");
    }

    if (
      !this.state.sent &&
      this.props.player_id >= 0 &&
      this.props.isConnected
    ) {
      this.props.sendMessage({
        player_id: this.props.player_id
      });
      this.setState({
        sent: true
      });
    }


  };

  componentDidMount() {
    this.props.connect(this.props.match.params.id);
  }

  componentDidUpdate() {
    console.log("[MauMau] - componentDidUpdate");
    this.sendPlayerInformations();
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  render() {
    return (
      <section>
        <div>
          <section>
            <section>
              <p>Stefan Kröker</p>
            </section>
            <div>
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
            </div>
          </section>
          <section>
            <section>
              <p>Marti Stuwe</p>
            </section>
            <div>
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
            </div>
          </section>
        </div>
        <div>
          <section>
            <section>
              <p>33</p>
            </section>
            <Card
              hide
              style={{
                boxShadow:
                  "2px 2px 6px rgba(0, 0, 0, " +
                  (this.boxShadow < 0.5 ? this.boxShadow : 0.5) +
                  ")"
              }}
            />
          </section>
          <section>
            <Card hide />
          </section>
        </div>
        <div>
          <section>
            <div>
              <Card symbol={"c"} value={"7"} isHoverable />
              <Card symbol={"s"} value={"7"} isHoverable />
              <Card symbol={"h"} value={"7"} isHoverable />
              <Card symbol={"d"} value={"7"} isHoverable />
            </div>
            <section>
              <img src={leaderImg} alt="leader" />
              <p>Patrick Reinke</p>
            </section>
          </section>
          <section>
            <div>
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
              <Card hide />
            </div>
            <section>
              <p>Max Mustermann</p>
            </section>
          </section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isConnected: state.game.connected,
  player_id: state.general.player_id
});

const mapDispatchToProps = dispatch => ({
  connect: id =>
    dispatch(gameActions.connect(config.SOCKET_API + "maumau/" + id + "/")),
  disconnect: () => dispatch(gameActions.disconnect()),
  sendMessage: message => dispatch(gameActions.sendMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MauMau));
