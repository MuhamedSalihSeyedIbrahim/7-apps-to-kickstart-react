import React, { Component } from "react";
import "./RandomJokeGenrator.css";

class RandomJokeGenrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "You are a joke!!",
    };
    this.jokeFetcher = this.jokeFetcher.bind(this);
  }

  async jokeFetcher() {
    try {
      let joke = await fetch("http://api.icndb.com/jokes/random");
      joke = await joke.json();
      console.log(joke);
      this.setState({
        joke: joke.value.joke,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        joke: "You are a joke!!",
      });
    }
  }

  render() {
    return (
      <div className="random-joke-genrator">
        <h1 className="main text-center">Lets Crack Some Joke!</h1>
        <p id="outputrjg" className="text-center">
          {this.state.joke}
        </p>
        <div id="controls" className="text-center">
          <button
            className="btn btn-default btn-outline-primary"
            id="startPause"
            onClick={this.jokeFetcher}
          >
            Crack Some Joke!
          </button>
        </div>
      </div>
    );
  }
}

export default RandomJokeGenrator;
