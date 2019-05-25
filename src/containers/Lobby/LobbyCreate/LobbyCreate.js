import React, { Component } from "react";
import Label from "../../../components/UI/Label/Label";
import Select from "../../../components/UI/Select/Select";
import { Input, Button } from "reactstrap";

import { connect } from "react-redux";

import classes from "./LobbyCreate.css";

import * as actions from "../../../store/actions/index";
import * as config from "../../../config";

class LobbyCreate extends Component {
  state = {
    games: [
      { value: "maumau", label: "Mau Mau" },
      { value: "cardsagainsthumanity", label: "Cards Against Humanity" }
    ],
    selectedGame: null,
    visibilities: [
      { value: "private", label: "Privat" },
      { value: "public", label: "Öffentlich" }
    ],
    selectedVisibility: null,
    players: {
      value: "",
      maximum: 8,
      minimum: 2,
      isValid: false,
      touched: false
    }
  };

  onGameChange = selectedGame => {
    this.setState({ selectedGame });
  };

  onVisibilitiesChange = selectedVisibility => {
    this.setState({ selectedVisibility });
  };

  onPlayersChange = event => {
    let players = this.state.players;
    players.touched = true;
    players.isValid = false;
    players.value = event.target.value;

    if (players.value <= players.maximum && players.value >= players.minimum) {
      players.isValid = true;
    }

    this.setState({ players: players });
  };

  abort = () => {
    this.props.history.push("/lobby");
  };

  send = () => {
    if (this.state.players.isValid) {
      const settings = {
        game: this.state.selectedGame.label,
        visibility: this.state.selectedVisibility.value,
        max_players: this.state.players.value
      };
      console.log(settings);
      this.props.sendSettings(settings);
    }
  };

  componentDidMount() {
    this.props.connect();

    if (this.state.selectedGame === null || this.selectedVisibility === null) {
      this.setState(prevState => {
        return {
          selectedGame: prevState.games[0],
          selectedVisibility: prevState.visibilities[0]
        };
      });
    }
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  render() {
    const inputClasses = [classes.Input];

    if (!this.state.players.isValid && this.state.players.touched) {
      inputClasses.push(classes.Error);
    }

    return (
      <div className={classes.LobbyCreate}>
        <section>
          <h1>Lobby erstellen</h1>
          <div>
            <div>
              <Label>Kartenspiel:</Label>
              <Select
                selected={this.state.selectedGame}
                onChange={this.onGameChange}
                options={this.state.games}
              />
            </div>
            <div>
              <Label>Spieleranzahl:</Label>
              <Input
                className={inputClasses.join(" ")}
                placeholder={
                  this.state.players.minimum +
                  " - " +
                  this.state.players.maximum +
                  " Spieler"
                }
                value={this.state.players.value}
                onChange={this.onPlayersChange}
              />
            </div>
            <div>
              <Label>Lobbyart:</Label>
              <Select
                selected={this.state.selectedVisibility}
                onChange={this.onVisibilitiesChange}
                options={this.state.visibilities}
              />
            </div>
          </div>
        </section>
        <section>
          <Button onClick={this.abort}>Abbrechen</Button>
          <Button
            onClick={this.send}
            disabled={
              !this.state.players.isValid || this.state.players.isTouched || !this.props.connected
            }
          >
            Lobby erstellen
          </Button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobby.lobby,
  websocket: state.lobby.websocket,
  connected: state.lobby.connected,
  error: state.lobby.error
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(actions.create(config.SOCKET_API + "create/")),
  disconnect: () => dispatch(actions.lobbyCreateDisconnect()),
  sendSettings: settings => dispatch(actions.sendSettings(settings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyCreate);
