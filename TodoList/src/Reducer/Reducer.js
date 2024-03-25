import { REDUCER_ACTIONS } from '../components/Actions/Actions';

export const taskReducer = (state, action) => {

    if (action.type === REDUCER_ACTIONS.ADD_TASK) {

        const newTask = {
            id: crypto.randomUUID(),
            text: action.payload,
            completed: false
          }
          
          return [...state, newTask]
        } else if (action.type === REDUCER_ACTIONS.COMPLETE_TASK) {
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
              );
        }else if (action.type === REDUCER_ACTIONS.DELETE_TASK) {

            return state.filter(task => task.id !== action.payload);

        } else if (action.type === REDUCER_ACTIONS.DELETE_ALL_TASKS) {

            return [];

        } else {
            return tasks;
          }
 
  };