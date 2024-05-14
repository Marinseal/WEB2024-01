import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Error, Favorites, Home, Search } from "../screens"
import '../style.css';

export const AppRouter = () => {
  return (
    <>
    <section className='app'>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/*" element={<Error/>}/>
    </Routes>
    </section>
    </>
  )
}