import React, { Component } from "react";
import "./Counter.css";
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.counterIncrement = this.counterIncrement.bind(this);
    this.counterDecrement = this.counterDecrement.bind(this);
  }

  counterIncrement(event) {
    this.setState({
      count: this.state.count + 1,
    });
  }

  counterDecrement(event) {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="counter">
        <h1 className="main text-center">Counter</h1>
        <p id="output" className="text-center">
          Count : {this.state.count}
        </p>
        <div id="controls" className="text-center">
          <button
            className="btn btn-default btn-outline-primary"
            id="startPause"
            ref={(element) => (this.startPauseDOMElement = element)}
            onClick={this.counterIncrement}
          >
            +
          </button>
          <button
            className="btn btn-default btn-outline-primary"
            onClick={this.counterDecrement}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
