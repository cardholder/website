import React, { Component } from "react";
import Label from "../../../components/UI/Label/Label";
import Select from "react-select";
import chroma from "chroma-js";

import classes from "./LobbyCreate.css";

class LobbyCreate extends Component {
  state = {
    games: [
      { value: "maumau", label: "Mau Mau" },
      { value: "cardsagainsthumanity", label: "Cards Against Humanity" }
    ],
    selectedGame: null
  };

  onGameChange = selectedGame => {
    this.setState({ selectedGame });
    console.log(selectedGame);
  };

  componentDidMount() {
    if (this.state.selectedGame === null) {
      this.setState(prevState => {
        return { selectedGame: prevState.games[0] };
      });
    }
  }

  render() {
    const colorStyles = {
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isDisabled
          ? null
          : state.isSelected
          ? "#76c5b5"
          : state.isFocused
          ? chroma("#76c5b5")
              .alpha(0.1)
              .css()
          : null,
        color: "black"
      }),
      control: (provided, state) => ({
        ...provided,
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        border: "0px"
      }),
      menu: (provided, state) => ({
        ...provided,
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        border: "0px"
      })
    };

    return (
      <div className={classes.LobbyCreate}>
        <h1>Lobby erstellen</h1>
        <div>
          <Label>Kartenspiel:</Label>
          <Select
            styles={colorStyles}
            value={this.state.selectedGame}
            onChange={this.onGameChange}
            options={this.state.games}
          />
        </div>
      </div>
    );
  }
}

export default LobbyCreate;
