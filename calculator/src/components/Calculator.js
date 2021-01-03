import React, { Component } from "react";
import "./Calculator.css";

import Result from "./Result";
import Keyboard from "./Keyboard";

class Calculator extends Component {
  state = {
    result: "0",
    operation: "",
    first_element: "0",
    second_element: "",
  };

  handleClick = (e) => {
    const value = e.currentTarget.innerHTML.split("")[0];

    if (e.currentTarget.classList.contains("operation")) {
      switch (value) {
        case "C":
          this.clear();
          break;
        case "=":
          this.calculate();
          break;
        case "<":
          this.backspace();
          break;
        default:
          this.setOperation(value);
          break;
      }
    } else if (!this.state.operation) this.setFirstElement(value);
    else this.setSecondElement(value);
  };

  calculate = () => {
    let { result, operation, first_element, second_element } = this.state;
    if (operation && first_element && second_element) {
      switch (operation) {
        case "+":
          result = parseInt(first_element) + parseInt(second_element);
          break;
        case "-":
          result = first_element - second_element;
          break;
        case "*":
          result = first_element * second_element;
          break;
        case "/":
          result = first_element / second_element;
          break;
        default:
          result = "ERROR";
          break;
      }
      this.setState({
        result,
        operation: "",
        first_element: "",
        second_element: "",
      });
    }
  };

  clear = () => {
    this.setState({
      result: "0",
      operation: "",
      first_element: "0",
      second_element: "",
    });
  };

  backspace = () => {
    let { result, operation, first_element, second_element } = this.state;
    if (second_element) {
      this.setState({
        result: result.slice(0, -1),
        second_element: second_element.slice(0, -1),
      });
    } else if (operation) {
      this.setState({
        result: result.slice(0, -3),
        operation: "",
      });
    } else if (first_element.length > 1) {
      this.setState({
        result: result.slice(0, -1),
        first_element: first_element.slice(0, -1),
      });
    } else {
      this.setState({
        result: "0",
        first_element: "0",
      });
    }
  };

  setOperation = (value) => {
    if (!this.state.operation) {
      this.setState((prevState) => ({
        result: prevState.result + " " + value + " ",
        operation: value,
      }));
    }
  };

  setFirstElement = (value) => {
    if (this.state.result === "0") {
      this.setState(() => ({
        first_element: value,
        result: value,
      }));
    } else
      this.setState((prevState) => ({
        first_element: prevState.first_element + value,
        result: prevState.result + value,
      }));
  };

  setSecondElement = (value) => {
    this.setState((prevState) => ({
      second_element: prevState.second_element + value,
      result: prevState.result + value,
    }));
  };

  render() {
    return (
      <div className="calculator">
        <Result result={this.state.result} />
        <Keyboard click={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
