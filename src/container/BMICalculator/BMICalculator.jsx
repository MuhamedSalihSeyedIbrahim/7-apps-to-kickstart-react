import React, { Component } from "react";
import "./BMICalculator.css";
class BMICalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: `Your BMI is `,
    };

    this.outputDOMElement = React.createRef();
    this.heightDOMElement = React.createRef();
    this.weightDOMElement = React.createRef();

    this.calculateBMI = this.calculateBMI.bind(this);
  }

  calculateBMI(event) {
    event.preventDefault();
    let height = parseFloat(this.heightDOMElement.value);
    let weight = parseFloat(this.weightDOMElement.value);
    let bmi = weight / (height * height);
    bmi = (bmi * 10000).toFixed(2);

    var comment = "";
    if (bmi < 18.5) {
      comment = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      comment = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
      comment = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
      comment = "Obese";
    } else if (35 <= bmi) {
      comment = "Extremely obese";
    }

    this.setState({
      output: `Your BMI is ${bmi} & You are ${comment}`,
    });
  }

  render() {
    return (
      <div className="bmi-calculator">
        <div className="container-non-bootstrap flex-row center">
          <div className="calculator">
            <form className=" flex-col">
              <h2
                className="form-item"
                ref={(element) => (this.outputDOMElement = element)}
              >
                {this.state.output}
              </h2>
              <input
                className="form-item mt-auto"
                type="number"
                id="weight"
                name="weight"
                placeholder="Enter your weight in kilograms"
                ref={(element) => (this.weightDOMElement = element)}
              />
              <input
                className="form-item mt-auto "
                type="number"
                id="height"
                name="height"
                placeholder="Enter your height in centimetres"
                ref={(element) => (this.heightDOMElement = element)}
              />
              <button
                className="form-item mt-auto "
                id="btn"
                onClick={this.calculateBMI}
                type="submit"
              >
                Check
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BMICalculator;
