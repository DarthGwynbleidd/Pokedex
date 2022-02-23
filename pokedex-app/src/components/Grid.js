import React, { useState, useContext } from 'react';
import PokemonContext from '../contexts/PokemonContext';
import Card from './Card';


const Grid = () => {

    const { pokemons } = useContext(PokemonContext);

    console.log(pokemons)
    return (
        <div className='grid'>
            {pokemons.map((pokemon) => {

                return <Card key={pokemon.id} {...pokemon} />
            })
            }
        </div>
    );
};

export default Grid;