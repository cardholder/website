import React, { Component } from "react";
import { Input } from "reactstrap";
import Websocket from "react-websocket";

import searchIcon from "../../assets/search.svg";

import classes from "./Searchbar.css";

class Searchbar extends Component {
  state = {
    url:
      "ws://ec2-18-195-20-221.eu-central-1.compute.amazonaws.com:8000/ws/chat/lobby/"
  };

  handleData(data) {
    console.log(data);
  }

  sendMessage(message) {
    console.log(message);
    this.refWebSocket.sendMessage(
      JSON.stringify({
        message: message
      })
    );
  }

  render() {
    return (
      <div className={classes.Searchbar}>
        <Input
          style={{ backgroundImage: "url(" + { searchIcon } + ")" }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.sendMessage("Test 123");
            }
          }}
        />
        <Websocket
          url={this.state.url}
          onMessage={this.handleData}
          onOpen={console.log("Open")}
          onClose={console.log("Closed")}
          ref={Websocket => {
            this.refWebSocket = Websocket;
          }}
        />
      </div>
    );
  }
}

export default Searchbar;
