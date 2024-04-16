import "./Fact.css"
import React from "react"
import { useFact } from "../../hooks/useFact"

export const Fact = () => {

    const {fact, img} = useFact();

    return (
        <div className="card">
            <div className="card-image-container">
                <img src={img}/>
            </div>
            <p className="card-title">FACT</p>
            <p className="card-des">{fact}</p>
        </div>
    )
}