import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./index.css";

import StopWatch from "./StopWatch/StopWatch";
import Counter from "./Counter/Counter";
import BMICalculator from "./BMICalculator/BMICalculator";
import RandomJokeGenrator from "./RandomJokeGenrator/RandomJokeGenrator";
import TicTacToe from "./TicTacToe/TicTacToe";
import EmailValidation from "./EmailValidation/EmailValidation";
import WeatherApp from "./WeatherApp/WeatherApp";

import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

class Routing extends Component {
  constructor(props) {
    super(props);

    this.routes = [
      {
        path: "/StopWatch",
        component: StopWatch,
      },
      {
        path: "/Counter",
        component: Counter,
      },
      {
        path: "/BMICalculator",
        component: BMICalculator,
      },
      {
        path: "/RandomJokeGenrator",
        component: RandomJokeGenrator,
      },
      {
        path: "/TicTacToe",
        component: TicTacToe,
      },
      {
        path: "/EmailValidation",
        component: EmailValidation,
      },
      {
        path: "/WeatherApp",
        component: WeatherApp,
      },
     
    ];

    this.NotFoundRedirect.bind(this);
  }

  NotFoundRedirect() {
    return <Redirect to="/StopWatch" />;
  }

  render() {
    return (
      <>
    
        <Router>
            <Header />
          <div className="Body">
            <Switch>
              <Route
                exact
                key={this.routes.length + 2}
                path="/"
                component={StopWatch}
              />
              {this.routes.map(({ path, component: ComponentTag }, index) => (
                <Route
                  key={index}
                  path={path}
                  render={(props) => <ComponentTag />}
                />
              ))}
              <Route
                key={this.routes.length + 1}
                component={this.NotFoundRedirect}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default Routing;
