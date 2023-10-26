import React, { useState } from "react";
import Task from "./Task";

function TaskList(props) {
  const [tasksArray, setTasksArray] = useState(props.tasks)

  function handleDelete(undeletedTasks) {
    setTasksArray(undeletedTasks)
  }

  const newTasks = tasksArray.map(function(task, index) {
    return (
    <Task key={index} text={task.text} category = {task.category} tasks={props.tasks} handleDelete={handleDelete}/>
    )
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {newTasks}
    </div>
  );
}

export default TaskList;
