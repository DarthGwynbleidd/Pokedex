import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Evolutions from './Evolutions';
import NavigBar from './NavigBar';
import Pokemon from './Pokemon';
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import PokemonContext from '../contexts/PokemonContext';

const PokemonPage = () => {

    const { pokemonName } = useParams()
    const { pokemons, setPokemons } = useContext(PokemonContext);

    const pokemonNameNoAccent = pokemonName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    useEffect(() => {
        const temp = []

        async function fetchPokemons() {


            let alias = ""
            for (let name in nameTranslate) {
                let noAccent = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                if (noAccent === pokemonNameNoAccent)
                    alias = nameTranslate[name]
            }

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${alias}`)

            const obj = { id: '', pokemonName: '', image: '', type1: '', type2: '' };
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

        for (let pokemon of pokemons) {
            if (!pokemon[pokemonName])
                fetchPokemons();
        }

    }, []);
    return (
        <div className='pokemonPage'>
            <NavigBar />
            <Pokemon />
            <Evolutions />

        </div>
    );
};

export default PokemonPage;