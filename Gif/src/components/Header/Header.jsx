import "./Header.css"
import React from "react"
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <header>
        <Link to="/">
            <h1 className="title">GIPHY 2.0</h1>
        </Link>
        <div>
            <Link to="/search">
                <nav>Search</nav>
            </Link>
            <Link to="/favorites">
                <nav>Favorites</nav>
            </Link>
        </div>
        </header>
    )
}