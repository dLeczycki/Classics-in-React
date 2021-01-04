import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const activeTasks = props.tasks
    .filter((task) => task.active)
    .map((task) => (
      <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change}
      />
    ));
  const doneTasks = props.tasks
    .filter((task) => !task.active)
    .map((task) => (
      <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change}
      />
    ));
  return (
    <>
      <div className="active">
        <h1>To Do</h1>
        {activeTasks.length > 0 ? activeTasks : <p>You have nothing to do!</p>}
      </div>

      <hr />

      <div className="done">
        <h2>
          Done <em>({doneTasks.length})</em>
        </h2>
        {doneTasks}
      </div>
    </>
  );
};

export default TaskList;
