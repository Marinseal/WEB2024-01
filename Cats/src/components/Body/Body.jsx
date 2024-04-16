import "./Body.css"
import React from "react"
import { useFact } from "../../hooks/useFact"

import { Alert } from "../Alert/Alert"
import { Fact } from "../Fact/Fact"
import { Loader } from "../Loader/Loader"
import { Button } from "../Button/Button"

export const Body = () => {

    const { loader, error, newFact } = useFact();

    if (loader) {
        return(
            <Loader/>
        )
    }

    if (error) {
        return(
            <>
            <Alert/>
            <Button title={"Search again a new cat fact"} onClick={newFact}/>
            </>
        )
    }

    return (
        <>        
        <Fact/>
        <Button title={"New Cat Fact"} onClick={newFact}/>
        </>
    )
}