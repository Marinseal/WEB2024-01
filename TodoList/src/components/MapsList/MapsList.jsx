import React from "react"
import { contextTask } from "../../hooks/useTaskState"
import TodoItem from "../TodoItem/TodoItem"

export function MapList() {
  const { tasks, deleteTask, completeTask,filteredTasks } = contextTask();
  const hasTasks = tasks.length > 0;
  console.log(tasks)

  const getGetTaskList = (hasTasks) =>  {
    return hasTasks
            ? (<ul id="tasks-list">
                  {
                    filteredTasks.map( task => (
                      < TodoItem task={task.text}
                            onComplete={() => completeTask(task.id)}
                            onDelete={() => deleteTask(task.id)}
                            key={task.id}/> ))
                  }
                </ul>)
            : <p className="Negative">No hay tareas</p>
  }

  return getGetTaskList(hasTasks)
}