import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "2021-01-01",
  };

  render() {
    return (
      <div className="form">
        <input type="text" placeholder="Add task" value={this.state.text} />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Important</label>
        <br />
        <label htmlFor="date">Finish date</label>
        <input type="date" id="date" value={this.state.date} />
        <br />
        <button>Add</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
