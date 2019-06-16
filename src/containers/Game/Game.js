import React, { Component } from 'react'
import Board from "./Board/Board";
import MauMau from "./MauMau/MauMau";

class Game extends Component {
    render() {
        return (
            <Board>
                <MauMau />
            </Board>
        );
    }
}

export default Game;