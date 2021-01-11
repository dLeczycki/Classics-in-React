import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = (e) => {
    const { text, date, checked } = this.state;
    const result = this.props.addTask(text, date, checked);
    if (result) {
      this.setState({
        text: "",
        checked: false,
        date: this.minDate,
      });
    }
  };

  render() {
    let maxDate = parseInt(this.minDate.slice(0, 4)) + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Add task"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important">Important</label>
        <br />
        <label htmlFor="date">Finish date</label>
        <input
          type="date"
          id="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Add</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
