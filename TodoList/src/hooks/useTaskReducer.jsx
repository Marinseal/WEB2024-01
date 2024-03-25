import { useReducer, useEffect } from 'react';
import { REDUCER_ACTIONS } from '../components/Actions/Actions';

const useTaskReducer = (initialTasks) => {
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks ?? []);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    if (Array.isArray(storedTasks)) {
      dispatchTasks({ type: SET_TASKS_FROM_STORAGE, payload: storedTasks });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    dispatchTasks({ type: ADD_TASK, payload: { id: Date.now(), text: taskText, completed: false } });
  };

  const completeTask = (taskId) => {
    dispatchTasks({ type: COMPLETE_TASK, payload: { id: taskId } });
  };

  const deleteTask = (taskId) => {
    dispatchTasks({ type: DELETE_TASK, payload: { id: taskId } });
  };

  const deleteAllTasks = () => {
    dispatchTasks({ type: DELETE_ALL_TASKS });
  };

  const setFilter = (newFilter) => {
    dispatchFilter({ type: SET_FILTER, payload: newFilter });
  };

  return {
    tasks,
    filter,
    addTask,
    completeTask,
    deleteTask,
    deleteAllTasks,
    setFilter,
  };
};

export default useTaskReducer;
