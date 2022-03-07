///
// src/components/scoreboard.jsx
///
import React from "react";
import { Link } from "react-router-dom";

// Import Storage object
import { Storage } from "../../storage/storage";

// Create Scoreboard component
export class Scoreboard extends React.Component {
  state = {
    scoreboard: [],
  };

  // After component mounts, load any data from local storage and update component state
  async componentDidMount() {
    let storage = await new Storage().getData();

    this.setState({
      scoreboard: storage,
    });
  }

  render() {
    return (
      <div className="container game">
        <div className="row">
          <div className="col-sm">
            <Link to="TicTacToe/board" className="justify-content-center">
              <button className="btn btn-outline-primary">
                Start new game
              </button>
            </Link>
          </div>
          <div className="col-sm">
            <ul className="list-group">
              <li className="list-group-item active">
                <h1>Recent games:</h1>
              </li>
              {this.state.scoreboard.map((leader, key) => {
                return (
                  <li key={key} className="list-group-item">
                    {leader}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
