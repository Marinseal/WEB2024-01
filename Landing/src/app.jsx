import React from 'react'
import { Header } from './components/Header/header'
import { Body } from './components/Body/body'
import { Footer } from './components/Footer/footer'
import { Card } from './components/Card/card'



export default function App(){

        return(
        <div>
        <Header></Header>
        <Body></Body>
        <h1 className='secondary-title'>OUR COLLECTION</h1>
        <Card></Card>
        <Footer></Footer>
        </div>
        )
    
}