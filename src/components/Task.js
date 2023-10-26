import React from "react";


function Task(props) {
  function deleteTask() {
    const undeleted = props.tasks.filter(function(task) {
       return task.text !== props.text
    });

    props.handleDelete(undeleted);
    }

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
