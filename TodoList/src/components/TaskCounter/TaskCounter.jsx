import React from 'react';
import Button from '../Button/button';
import { contextTask } from '../../hooks/useTaskState';

function TaskCounter() {

  const {deleteAllTasks,
        completedTasks,
        totalTasks} = contextTask()
  return (
    <div className='taskcounter-container'>
      <p>{completedTasks()} tareas de {totalTasks()}</p> 
      <section className='button-all'>
      <Button onClick={deleteAllTasks}>Eliminar todas las tareas</Button>
      </section>
    </div>
  );
}

export default TaskCounter;