import React, { Component, Fragment } from "react";
import Label from "../../../components/UI/Label/Label";
import Select from "../../../components/UI/Select/Select";
import { Button } from "reactstrap";
import Input from "../../../components/UI/Input/Input";
import Modal from "../../../components/UI/Modal/Modal";

import { connect } from "react-redux";

import classes from "./LobbyCreate.css";

import * as createActions from "../../../store/actions/create";
import * as config from "../../../config";

export class LobbyCreate extends Component {
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
      isTouched: false
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
    players.isTouched = true;
    players.isValid = false;
    players.value = event.target.value;

    if (players.value <= players.maximum && players.value >= players.minimum) {
      players.isValid = true;
    }

    this.setState({ players: players });
  };

  abort = () => {
    this.props.disconnect();
    this.props.history.push("/lobby");
  };

  send = () => {
    if (this.state.players.isValid) {
      const settings = {
        game: this.state.selectedGame.value,
        visibility: this.state.selectedVisibility.value,
        max_players: this.state.players.value
      };
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


  componentDidUpdate() {
    if (this.props.id) {
      this.props.history.push("/lobby/" + this.props.id);
    }
  }

  render() {
    return (
      <Fragment>
        <Modal />
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
                  isValid={this.state.players.isValid}
                  isTouched={this.state.players.isTouched}
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
                !this.state.players.isValid ||
                !this.state.players.isTouched ||
                !this.props.connected
              }
            >
              Lobby erstellen
            </Button>
          </section>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  id: state.create.id,
  websocket: state.create.websocket,
  connected: state.create.connected,
  error: state.create.error
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(createActions.connect(config.SOCKET_API + "create/", "create")),
  disconnect: () => dispatch(createActions.lobbyDisconnect()),
  sendSettings: settings => dispatch(createActions.sendSettings(settings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyCreate);
