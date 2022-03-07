// src/index.jsx
///
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Import Board and Scoreboard views
import { Board } from "./sub-components/board/Board";
import { Scoreboard } from "./sub-components/scoreboard/scoreboard";

import "../TicTacToeComponent/sub-components/board-box/board-box.css";
import "../TicTacToeComponent/sub-components/board/Board.css";
import "./sub-components-styles/button.css";

// Create App component
export class TicTacToeComponent extends React.Component {
  render() {
    return (
      <div className="app p-5">
        <BrowserRouter>
          <Route exact path="/TicTacToe/" component={Scoreboard} />
          <Route path="/TicTacToe/board" component={Board} />
        </BrowserRouter>
      </div>
    );
  }
}
