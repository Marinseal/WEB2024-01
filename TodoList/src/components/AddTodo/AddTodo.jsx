import React, { useState } from 'react';
import Button from '../Button/button';
import { contextTask } from '../../hooks/useTaskState';


function AddTodo() {

  const {addTask} = contextTask()

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTask(inputValue);
    setInputValue("")
  };


  return (
    <div className='todo-container'>
      <form onSubmit={handleFormSubmit}>
        <input className='task'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Introduce tu tarea aquí"
        />
         <Button type="submit">Añadir Tarea</Button>

      </form>
    </div>
  );
}

export default AddTodo;
