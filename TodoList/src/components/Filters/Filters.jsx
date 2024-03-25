import React, { useState} from 'react';
import { contextTask } from '../../hooks/useTaskState';

export function TodoFilters() {
  const {setCurrentFilter} = contextTask()
  const [filterChecked, setFilterChecked] = useState('all');

  const handleFilterChange = (event) => {
    setFilterChecked(event);
    setCurrentFilter(event)
  };

  return (
    <div className='filters-container'>
      <label>
        <input 
          type="radio" 
          id="all" 
          checked={filterChecked === "all"} 
          onChange={()=>handleFilterChange("all")} 
        />
        Todos
      </label>

      <label>
        <input 
          type="radio" 
          id="completed" 
          checked={filterChecked === "completed"}
          onChange={()=>handleFilterChange("completed")} 
        />
        Completados
      </label>

      <label>
        <input 
          type="radio" 
          id="pending" 
          checked={filterChecked === "pending"} 
          onChange={()=>handleFilterChange("pending")} 
        />
        Pendientes
      </label>
    </div>
  );
}