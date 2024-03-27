import { React, useState } from "react";
import "../stylesheets/FormTask.css";
import { v4 as uuidv4 } from "uuid";


function FormTask( props ) {

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);

    e.target.reset();
  }

    return(
        <form 
          className="task-form"
          onSubmit={handleSubmit}>
            <input
                className="task-input"
                type="text"
                placeholder="Escribe tu tarea"
                name="text"
                onChange={handleChange}
            />
            <button 
            className="task-button"
            >
                Añadir tarea
            </button>
        </form>
    );
}


export default FormTask;