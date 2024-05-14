import "./ErrorMessage.css"
import React from "react"

export const ErrorMessage = () => {

    return (
        <div className="card-alert">
            <div className="card-alert-image-container">
                <img src="https://static.diariofemenino.com/uploads/mascotas/218109-dormir-gato.jpg"/>
            </div>
            <p className="card-alert-des">Meow! It looks like this cat has decided to take a break. Please try again in a moment while this kitty heads back.</p>
        </div>
    )
}