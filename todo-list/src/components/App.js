import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { Component } from "react";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Finish this App",
        date: "2021-01-10",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Train for not to be fat",
        date: "2021-01-05",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Relax",
        date: "2021-01-06",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Train again",
        date: "2021-01-07",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Have hair cut",
        date: "2020-12-31",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Make a good deed",
        date: "2021-01-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "Play Cyberpunk 2077",
        date: "2020-12-10",
        important: true,
        active: true,
        finishDate: "2020-12-31, 12:25:34",
      },
      {
        id: 7,
        text: "Play the piano",
        date: "2021-01-08",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((element) => element.id !== id);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="App">
        TODO APP
        <AddTask />
        <TaskList
          tasks={tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
