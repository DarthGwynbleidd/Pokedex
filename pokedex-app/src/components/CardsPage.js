import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import AdvancedResearch from './AdvancedResearch';
import TopButtons from './TopButtons';
import Grid from './Grid';
import BottomButton from './BottomButton';
import PokemonContext from '../contexts/PokemonContext';

const CardsPage = () => {
    const { pokemons, setPokemons } = useContext(PokemonContext);

    useEffect(() => {

        async function fetchPokemons() {

            const temp = []

            for (let number = 1; number <= 12; number++) {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)

                const obj = { id: '', pokemonName: '', image: '', type1: '', type2: '' };
                // console.log(response)
                obj.id = response.data.id;
                obj.pokemonName = response.data.name;
                obj.image = response.data.sprites.other["official-artwork"].front_default;
                obj.type1 = response.data.types[0].type.name;
                try {
                    obj.type2 = response.data.types[1].type.name;
                } catch (error) {

                }
                temp.push(obj)
            }
            setPokemons(prevPokemons => prevPokemons.concat(temp));
        }
        fetchPokemons();
    }, []);

    return (
        <div className='cardsPage'>
            <AdvancedResearch />
            <TopButtons />
            <Grid />
            <BottomButton />
        </div>
    );
};

export default CardsPage;