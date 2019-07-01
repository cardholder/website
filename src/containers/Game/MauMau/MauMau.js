import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "./Card/Card";
import * as gameActions from "../../../store/actions/game";
import * as config from "../../../config";
import classes from "./MauMau.css";
import "react-notifications/lib/notifications.css";
import posed from "react-pose";

import leaderImg from "../../../assets/crown.svg";

import Player from "./Player/Player";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import WinnerModal from "./WinnerModal/WinnerModal";

class MauMau extends Component {
  state = {
    sent: false,
    myself: null,
    myTurn: false,
    onWish: false,
    wishElement: null,
    winnerModal: false,
    isWinner: false,
    top_card: null
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

  componentDidUpdate(prevProps) {
    this.sendPlayerInformations();
    if (this.props.players && this.state.myself === null) {
      let me = this.props.players.find(player => {
        return player.id === this.props.player_id;
      });
      this.setState({
        myself: me
      });
    }

    if (
      this.props.message &&
      this.props.message !== "Wuensch dir was" &&
      this.props.message !== "Sieger"
    ) {
      NotificationManager.error(this.props.message, "", 3000);
    }

    if (
      this.props.current_player &&
      this.state.myself &&
      !this.state.myTurn &&
      this.props.current_player.id === this.state.myself.id
    ) {
      NotificationManager.success("Du bist dran", "", 3000);
      this.setState({
        myTurn: true
      });
    }

    if (
      this.props.current_player &&
      this.state.myself &&
      this.state.myTurn &&
      this.props.current_player.id !== this.state.myself.id
    ) {
      NotificationManager.info(
        this.props.current_player.name + " ist dran",
        "",
        2000
      );
      this.setState({
        myTurn: false
      });
    }

    if (this.props.message === "Wuensch dir was" && !this.state.onWish) {
      this.setState({
        onWish: true
      });
    }

    if (this.props.symbol && this.state.wishElement === null) {
      if (this.props.symbol === "h") {
        this.setState({
          wishElement: <span className={classes.Red}>&hearts;</span>
        });
      } else if (this.props.symbol === "c") {
        this.setState({
          wishElement: <span className={classes.Black}>&clubs;</span>
        });
      } else if (this.props.symbol === "s") {
        this.setState({
          wishElement: <span className={classes.Black}>&spades;</span>
        });
      } else if (this.props.symbol === "d") {
        this.setState({
          wishElement: <span className={classes.Red}>&diams;</span>
        });
      }
    } else if (this.props.symbol === null && this.state.wishElement !== null) {
      this.setState({
        wishElement: null
      });
    }

    if (this.state.top_card !== this.props.top_card) {
      this.props.resetSymbol();
      this.setState({
        wishElement: null,
        top_card: this.props.top_card
      });
    }

    if (this.props.winner_id !== null && this.props.winner_id > -1 && !this.state.winnerModal) {
      if (this.props.player_id === this.props.winner_id) {
        this.setState({
          isWinner: true,
          winnerModal: true
        });
      } else {
        this.setState({
          isWinner: false,
          winnerModal: true
        });
      }
    }

    if (this.props.players !== null && this.props.players.length === 1 && !this.state.winnerModal) {
      this.setState({
        isWinner: true,
        winnerModal: true
      });
    }

    this.props.setErrorMessage("");
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  onTurn = card => {
    this.props.sendMessage({
      card: card,
      player: this.state.myself
    });

    this.props.resetSymbol();
  };

  onDraw = () => {
    this.props.sendMessage({
      player: this.state.myself
    });
  };

  onWish = symbol => {
    this.props.sendMessage({
      symbol: symbol
    });

    this.setState({ onWish: false });
  };

  onReturn = () => {
    this.props.history.push("/lobby");
  };

  getPrintedPlayers = (players, isBottom) => {
    let printedPlayers =
      players !== null
        ? players.map(player => {
            return (
              <Player
                key={player.id}
                player={player}
                isBottom={isBottom}
                current_player={this.props.current_player}
              />
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
      let bottomPlayers = playersCopy !== null ? playersCopy.splice(1) : null;

      printedTopPlayers = this.getPrintedPlayers(topPlayers, false);
      printedBottomPlayers = this.getPrintedPlayers(bottomPlayers, true);

      const Box =
        this.state.myself &&
        this.props.current_player &&
        this.state.myself.id === this.props.current_player.id
          ? posed.div({
              open: { y: "0" }
            })
          : posed.div({});

      const WBox = posed.div({
        hoverable: true,
        init: { y: 0 },
        hover: { y: 5 }
      });

      printedBottomPlayers.push(
        <Box key={this.props.player_id ? this.props.player_id : 99}>
          <article>
            {this.state.onWish ? (
              <Fragment>
                <WBox>
                  <span
                    className={classes.Red}
                    onClick={() => this.onWish("h")}
                  >
                    &hearts;
                  </span>
                </WBox>
                <WBox>
                  <span
                    className={classes.Black}
                    onClick={() => this.onWish("s")}
                  >
                    &spades;
                  </span>
                </WBox>
                <WBox>
                  <span
                    className={classes.Red}
                    onClick={() => this.onWish("d")}
                  >
                    &diams;
                  </span>
                </WBox>
                <WBox>
                  <span
                    className={classes.Black}
                    onClick={() => this.onWish("c")}
                  >
                    &clubs;
                  </span>
                </WBox>
              </Fragment>
            ) : null}
          </article>
          <section
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
              <p>{this.props.username}</p>
            </section>
          </section>
        </Box>
      );

      printedBottomPlayers.reverse();
    }

    return (
      <Fragment>
        <WinnerModal
          show={this.state.winnerModal}
          isWinner={this.state.isWinner}
          onReturn={this.onReturn}
        />
        <section className={classes.MauMau}>
          <div>{printedTopPlayers}</div>
          <div>
            <div className={classes.MiddleCards}>
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
                />
              </section>
              <section>
                {this.props.top_card ? (
                  <Card
                    key={this.props.top_card.id}
                    symbol={this.props.top_card.symbol}
                    value={this.props.top_card.value}
                    isClickable={() => {}}
                    onTurn={() => {}}
                  />
                ) : (
                  <Card hide />
                )}
              </section>
              <article>{this.state.wishElement}</article>
            </div>
          </div>
          <div>{printedBottomPlayers}</div>
          <NotificationContainer />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  remaining_cards: state.game.remaining_cards,
  message: state.game.message,
  cards: state.game.cards,
  current_player: state.game.current_player,
  players: state.game.players,
  isConnected: state.game.connected,
  player_id: state.general.player_id,
  top_card: state.game.top_card_of_discard_pile,
  username: state.general.username,
  symbol: state.game.symbol,
  winner_id: state.game.winner_id
});

const mapDispatchToProps = dispatch => ({
  connect: id =>
    dispatch(gameActions.connect(config.SOCKET_API + "maumau/" + id + "/")),
  disconnect: () => dispatch(gameActions.disconnect()),
  sendMessage: message => dispatch(gameActions.sendMessage(message)),
  setErrorMessage: message => dispatch(gameActions.setErrorMessage(message)),
  resetSymbol: () => dispatch(gameActions.resetSymbol())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MauMau));
