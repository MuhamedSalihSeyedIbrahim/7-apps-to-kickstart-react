import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { connect } from "react-redux";
import { navBarRouteHighlight } from "../../redux/actions/actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.routes = [
      {
        path: "/StopWatch",
        componentName: "Stop watch",
      },
      {
        path: "/Counter",
        componentName: "Counter",
      },
      {
        path: "/BMICalculator",
        componentName: "BMI Calc",
      },
      {
        path: "/RandomJokeGenrator",
        componentName: "Joke Genrator",
      },
      {
        path: "/TicTacToe",
        componentName: "Tic Tac Toe",
      },
      {
        path: "/EmailValidation",
        componentName: "Email valide",
      },
      {
        path: "/WeatherApp",
        componentName: "Weather App",
      },
    ];
  }

  render() {
    return (
      <div>
        {console.log(this.props.route)}

        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
          <div className="navbar-brand font-weight-bold header-logo" href="#">
            Kick Starter React {this.props.route}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.routes.map(({ path, componentName }, index) => (
                <li className="nav-item active" key={index}>
                  <Link
                    className="nav-link"
                    to={path}
                    onClick={(e) => this.props.navBarRouteHighlight(path)}
                  >
                    <span
                      className="nav-link"
                      style={{
                        ...(this.props.route === path ? { color: "red" } : ""),
                      }}
                    >
                      {componentName}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  route: state.route,
});

const mapDispatchToProps = (dispatch) => ({
  navBarRouteHighlight: (currentRoute) =>
    dispatch(navBarRouteHighlight(currentRoute)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
