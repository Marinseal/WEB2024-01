import React from 'react';
import Button from '../Button/button';


function TodoItem(props) {
  const {task,onComplete,onDelete,completed} = props

  const handleCheckboxChange = () => {
    onComplete(task.id);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <div className='todo-item'>
      <div className="task-info">
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={handleCheckboxChange} 
        />
        <span className={completed ? 'completed' : ''}>{task}</span>
      </div>
      <Button onClick={handleDeleteClick}>Eliminar</Button>
    </div>
  );
}

export default TodoItem;