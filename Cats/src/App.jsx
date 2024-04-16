import React from 'react'
import { Header } from './components/Header/Header'
import { Body } from './components/Body/Body'

export default function App(){
    return(
      <>
      <div className='container-app'>
      <Header/>
      <Body/>
      </div>
      </>
    )
}