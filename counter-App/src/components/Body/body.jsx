import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button/button';

export function Body() {
    const [pokemonId, setPokemonId] = useState(1);
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        getPokemonById(pokemonId);
    }, [pokemonId]);

    const getPokemonById = async (id) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemonData(response.data);
        } catch (error) {
            console.error("Error fetching Pokemon:", error);
        }
    };

    const calculate = (type) => {
        if (type === "add") {
            setPokemonId(pokemonId + 1); // Obtener el siguiente ID de Pokémon
        } else if (type === "subtract" && pokemonId > 1) {
            setPokemonId(pokemonId - 1); // Obtener el ID de Pokémon anterior
        } else if (type === "reset") {
            setPokemonId(1); // Reiniciar al primer Pokémon
        }
    };

    return (
        <body className='body-background'>
            <div className='counter-container'>
                {pokemonData && (
                    <>
                        <h1 className='counter-value'>{pokemonData.name}</h1>
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className='pokemon-image' />
                    </>
                )}
                <div className='btn-container'>
                    <Button type="subtract" onClick={() => calculate("subtract")} className='btn-add'>🡰</Button>
                    <Button type="reset" onClick={() => calculate("reset")} className='btn-reset'>RESET</Button>
                    <Button type="add" onClick={() => calculate("add")} className='btn-add'>🡲</Button>
                </div>
            </div>
        </body>
    );
}