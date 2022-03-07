import React, { Component } from "react";
import "./StopWatch.css";
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.time = 0;
    this.running = 0;
    this.startPause = this.startPause.bind(this);
    this.reset = this.reset.bind(this);
    this.increment = this.increment.bind(this);
    this.state = { output: "00:00:00" };
    this.startPauseDOMElement = React.createRef();
  }
  startPause(event) {
    if (this.running === 0) {
      this.running = 1;
      this.increment();
      console.log(this.startPauseDOMElement);
      this.startPauseDOMElement.value = "PAUSE";
    } else {
      this.running = 0;
      this.startPauseDOMElement.value = "RESUME";
    }
  }

  reset(event) {
    this.running = 0;
    this.time = 0;
    this.startPauseDOMElement.value = "START";
    this.setState({ output: "00:00:00" });
  }

  increment() {
    if (this.running === 1) {
      setTimeout(() => {
        this.time++;
        let mins = Math.floor(this.time / 10 / 60);
        let secs = Math.floor((this.time / 10) % 60);
        let tenths = this.time % 10;
        if (mins < 10) {
          mins = "0" + mins;
        }
        if (secs < 10) {
          secs = "0" + secs;
        }
        let updatedTime = String(mins) + ":" + String(secs) + ":" + "0" + String(tenths);
        this.setState({ output: updatedTime });

        this.increment();
      }, 100);
    }
  }
  render() {
    return (
      <div className="stop-watch">
        <h1 className="main text-center">STOP WATCH</h1>
        <p id="output" className="text-center">
          {this.state.output}
        </p>
        <div id="controls" className="text-center">
          <button
            className="btn btn-default btn-outline-primary"
            id="startPause"
            ref={(element) => (this.startPauseDOMElement = element)}
            onClick={this.startPause}
          >
            START
          </button>
          <button
            className="btn btn-default btn-outline-primary"
            onClick={this.reset}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
