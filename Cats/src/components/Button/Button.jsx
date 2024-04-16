import "./Button.css"
import React from "react"

export const Button = (props) => {

    const {title, onClick} = props

    const handleClick = () => onClick()

    return (
        <button onClick={handleClick} className="button">
            <p>{title}</p>
        </button>
    )
}