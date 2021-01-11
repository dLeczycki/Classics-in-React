import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  done.sort((a, b) => b.finishDate - a.finishDate);
  active.sort((a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
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
