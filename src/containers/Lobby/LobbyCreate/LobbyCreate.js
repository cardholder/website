import React, { Component } from "react";
import Label from "../../../components/UI/Label/Label";
import Select from "../../../components/UI/Select/Select";
import { Input, Button } from "reactstrap";

import classes from "./LobbyCreate.css";

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
  }

  componentDidMount() {
    if (this.state.selectedGame === null || this.selectedVisibility === null) {
      this.setState(prevState => {
        return {
          selectedGame: prevState.games[0],
          selectedVisibility: prevState.visibilities[0]
        };
      });
    }
  }

  render() {
    const inputClasses = [classes.Input];

    if (!this.state.players.isValid && this.state.players.touched) {
      inputClasses.push(classes.Error);
    }

    console.log(inputClasses.join(" "));

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
          <Button>Lobby erstellen</Button>
        </section>
      </div>
    );
  }
}

export default LobbyCreate;
