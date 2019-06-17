import React, { Component } from "react";
import Card from "./Card/Card";
import leaderImg from "../../../assets/crown.svg";

class MauMau extends Component {
  onTurn = () => {};

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
            <Card hide />
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

export default MauMau;
