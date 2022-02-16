import React from 'react';
import Evolutions from './Evolutions';
import NavigBar from './NavigBar';
import Pokemon from './Pokemon';

const PokemonPage = () => {
    return (
        <div className='pokemonPage'>
           <NavigBar />
           <Pokemon />
           <Evolutions />
           
        </div>
    );
};

export default PokemonPage;