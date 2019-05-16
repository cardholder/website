import React, { Component } from "react";
import { Button } from "reactstrap";

import classes from "./Home.css";

class Home extends Component {

  continueToLobbylist = () => {
    this.props.history.push('/lobby');
  }

  render() {
    return (
      <div className={classes.Home}>
        <section>
          <h1>Was ist cardholder?</h1>
          <p>
            Cardholder ein Open Source Projekt, welches die Möglichkeit bietet
            um mit anderen Menschen ein Kartenspiel deiner Wahl online zu
            spielen. <br />
            <br />
            <strong>Verfügbare Spiele:</strong>
          </p>
          <ul>
            <li>Mau Mau</li>
          </ul>
        </section>

        <section>
          <h1>Möchtest du uns unterstützen?</h1>
          <p>
            Wenn du uns unterstützen möchtest, kannst du das tun, indem du bei
            der Entwicklung auf GitHub hilfst. Füge zum Beispiel ein Spiel
            deiner Wahl hinzu und stell einen Pull-Request.
          </p>
        </section>

        <section>
          <Button onClick={ this.continueToLobbylist }>Lobby suchen</Button>
        </section>
      </div>
    );
  }
}

export default Home;
