import React from "react";
import FormTask from "./FormTask";
import Task from "./Task";
import "../stylesheets/TaskList.css";
import { useState } from "react";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const newTasks = [task, ...tasks];
      setTasks(newTasks);
    }
  }

  const deleteTask = id => {
      if(id){
      const newTasks = tasks.filter(task => task.id !== id);
      setTasks(newTasks);
      }
  }

  const completeTask = id => {
    const newTasks = tasks.map( task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <FormTask onSubmit={addTask} />
      <div className="task-list-container">
        {
          tasks.map((task) => 
            <Task 
            key={task.id}
            id={task.id}  
            text={task.text}
            completed={task.completed} 
            completeTask={completeTask}
            deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  );
}


export default TaskList;