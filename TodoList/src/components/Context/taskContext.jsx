import { useState,useEffect } from "react";
import React from "react";
import { TaskContext } from "./Context";
import { useReducer } from "react";
import { taskReducer } from "../../Reducer/Reducer";
import { REDUCER_ACTIONS } from "../Actions/Actions";

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? []

export function TaskContextProvider({children}) {
    const [tasks, dispatchTask] = useReducer(taskReducer,initTasks);
    const [currentFilter, setCurrentFilter] = useState('all');


    useEffect(() => {
        window.localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

   
  const addTask = (taskText) => {
      dispatchTask({type:REDUCER_ACTIONS.ADD_TASK,payload:taskText})
  };

  const completeTask = (taskId) => {
    dispatchTask({type:REDUCER_ACTIONS.COMPLETE_TASK,payload:taskId})
  };

  const deleteTask = (taskId) => {
   dispatchTask({type:REDUCER_ACTIONS.DELETE_TASK,payload:taskId})
  };

  const deleteAllTasks = () => {
   dispatchTask({type:REDUCER_ACTIONS.DELETE_ALL_TASKS})
  };


  const completedTasks = () => {
    return tasks.filter(task => task.completed).length
  }
  
  const totalTasks = () => {
    return tasks.length
  }
  
 
  
  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'completed') {
      return task.completed;
    } else if (currentFilter === 'pending') {
      return !task.completed;
    }
    return true;
  });

    return(<TaskContext.Provider value={{
        tasks,
        deleteTask,
        deleteAllTasks,
        currentFilter,
        setCurrentFilter,
        completeTask,
        addTask,
        filteredTasks,
        completedTasks,
        totalTasks,
    }}>
    {children}
    </TaskContext.Provider>
    )
}   