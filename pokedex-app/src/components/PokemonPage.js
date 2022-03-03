import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Evolutions from './Evolutions';
import NavigBar from './NavigBar';
import Pokemon from './Pokemon';
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import PokemonContext from '../contexts/PokemonContext';

const PokemonPage = () => {

    const { name } = useParams()
    const { pokemons, setPokemons } = useContext(PokemonContext);
    const urlName = name.split(":").join("")
    const pokemonNameNoAccent = urlName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const currentPokemon = {
        id: "",
        name: "",
        image: "",
        type1: "",
        type2: "",
        prevId: "",
        prevName: "",
        nextId: ""
    }

    useEffect(() => {
        const temp = []

        async function fetchPokemons() {


            let alias = ""
            for (let element in nameTranslate) {
                let noAccent = element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                if (noAccent === pokemonNameNoAccent)
                    alias = nameTranslate[element]
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
        if (pokemons.length === 0) {
            fetchPokemons()
        } else {
            for (let pokemon of pokemons) {
                if (!pokemon[name])
                    fetchPokemons();
            }

        }
        setPokemons(prevPokemons => prevPokemons.concat(temp));




    }, []);
    return (
        <div className='pokemonPage'>
            <NavigBar name={urlName} />
            <Pokemon />
            <Evolutions />

        </div>
    );
};

export default PokemonPage;