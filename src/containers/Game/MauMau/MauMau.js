import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "./Card/Card";
import leaderImg from "../../../assets/crown.svg";
import * as gameActions from "../../../store/actions/game";
import * as config from "../../../config";
import classes from "./MauMau.css";

class MauMau extends Component {
  state = {
    sent: false,
    myself: null
  };

  sendPlayerInformations = () => {
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
    this.sendPlayerInformations();
    if (this.props.players && this.state.myself === null) {
      let me = this.props.players.find(player => {
        return player.id === this.props.player_id;
      });
      this.setState({
        myself: me
      });
    }
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  onTurn = card => {
    this.props.sendMessage({
      card: card,
      player: this.state.myself
    });
  };

  onDraw = () => {
    console.log("draw");
    this.props.sendMessage({
      player: this.state.myself
    });
  };

  getPrintedPlayers = players => {
    let printedPlayers =
      players !== null
        ? players.map(player => {
            let cards = [];
            for (let i = 0; i < player.card_amount; i++) {
              cards.push(<Card key={i} hide />);
            }

            return (
              <section
                key={player.id}
                className={
                  this.props.current_player.id === player.id
                    ? classes.CurrentPlayer
                    : null
                }
              >
                <section>
                  {player !== null && player.role === "leader" ? (
                    <img src={leaderImg} alt="leader" />
                  ) : null}
                  <p>{player.name}</p>
                </section>
                <div>{cards}</div>
              </section>
            );
          })
        : [];

    return printedPlayers;
  };

  render() {
    let myCards = this.props.cards
      ? this.props.cards.map(card => {
          return (
            <Card
              key={card.id}
              id={card.id}
              symbol={card.symbol}
              value={card.value}
              onTurn={this.onTurn}
              isHoverable
            />
          );
        })
      : null;

    let boxShadow = this.props.remaining_cards * 0.16;

    let playersCopy = null;
    let printedTopPlayers = null;
    let printedBottomPlayers = null;
    if (this.props.players !== null) {
      playersCopy = this.props.players.slice();

      let topPlayers =
        playersCopy !== null
          ? playersCopy.splice(1, Math.round(this.props.players.length / 2))
          : null;
      let bottomPlayers =
        playersCopy !== null
          ? playersCopy.splice(Math.round((this.props.players.length - 1) / 2))
          : null;

      printedTopPlayers = this.getPrintedPlayers(topPlayers);
      printedBottomPlayers = this.getPrintedPlayers(bottomPlayers);
      printedBottomPlayers.push(
        <section
          key={this.props.player_id ? this.props.player_id : 99}
          className={
            this.props.current_player.id === this.props.player_id
              ? classes.CurrentPlayer
              : null
          }
        >
          <div>{myCards}</div>
          <section>
            {this.state.myself && this.state.myself.role === "leader" ? (
              <img src={leaderImg} alt="leader" />
            ) : null}
            <p>{this.state.myself ? this.state.myself.name : null}</p>
          </section>
        </section>
      );

      printedBottomPlayers.reverse();
    }

    return (
      <section>
        <div>{printedTopPlayers}</div>
        <div>
          <section>
            <section>
              <p>{this.props.remaining_cards}</p>
            </section>
            <Card
              isClickable={this.onDraw}
              hide
              style={{
                boxShadow:
                  "2px 2px 6px rgba(0, 0, 0, " +
                  (boxShadow < 0.5 ? boxShadow : 0.5) +
                  ")"
              }}
              isHoverable
            />
          </section>
          <section>
            {this.props.top_card ? (
              <Card
                key={this.props.top_card.id}
                symbol={this.props.top_card.symbol}
                value={this.props.top_card.value}
              />
            ) : (
              <Card hide />
            )}
          </section>
        </div>
        <div>{printedBottomPlayers}</div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  remaining_cards: state.game.remaining_cards,
  cards: state.game.cards,
  current_player: state.game.current_player,
  players: state.game.players,
  isConnected: state.game.connected,
  player_id: state.general.player_id,
  top_card: state.game.top_card_of_discard_pile
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
