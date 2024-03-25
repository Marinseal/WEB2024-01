import React from 'react';
import { Header } from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import {TodoFilters} from './components/Filters/Filters';
import { MapList } from './components/MapsList/MapsList';
import TaskCounter from './components/TaskCounter/TaskCounter';
import { TaskContextProvider } from './components/Context/taskContext';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
    <TaskContextProvider>
    <Header/>
    <AddTodo/>
    <TodoFilters/>
    <MapList/>
    <TaskCounter/>
    </TaskContextProvider>
    <Footer/>
    </> 
  );
  
}

export default App;