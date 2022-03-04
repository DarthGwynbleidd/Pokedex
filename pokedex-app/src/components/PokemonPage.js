import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Evolutions from './Evolutions';
import NavigBar from './NavigBar';
import PokemonSpecies from './PokemonSpecies';
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import PokemonContext from '../contexts/PokemonContext';
import CurrentPokemonContext from '../contexts/CurrentPokemonContext'


const PokemonPage = () => {

    const { name } = useParams()
    const { pokemons, setPokemons } = useContext(PokemonContext);
    const urlName = name.split(":").join("")
    const pokemonNameNoAccent = urlName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const [currentPokemon, setCurrentPokemon] = useState({})

    useEffect(() => {
        const temp = []

        async function fetchPokemons() {

            const responseLength = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/`)
            const length = responseLength.data.count + 1

            let alias = ""
            for (let element in nameTranslate) {
                let noAccent = element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                if (noAccent === pokemonNameNoAccent)
                    alias = nameTranslate[element]
            }

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${alias}`)

            const obj = {
                id: "",
                pokemonName: "",
                image: "",
                type1: "",
                type2: "",
                prevId: "",
                prevName: "",
                nextId: "",
                nextName: "",
                weight: "",
                height: "",
                gender: "",
                ability1: "",
                ability2: "",
                flavor: "",
                hp: '',
                attack: '',
                defense: '',
                specialAttack: '',
                specialDefense: '',
                speed: ''
            }

            obj.id = response.data.id;
            obj.pokemonName = response.data.name;
            obj.image = response.data.sprites.other["official-artwork"].front_default;
            obj.type1 = response.data.types[0].type.name;
            try {
                obj.type2 = response.data.types[1].type.name;
            } catch (error) {

            }
            obj.prevId = obj.id === 1 ? length - 1 : obj.id - 1
            const responsePrev = await axios.get(`https://pokeapi.co/api/v2/pokemon/${obj.prevId}`)
            obj.prevName = responsePrev.data.name

            obj.nextId = obj.id === length - 1 ? 1 : obj.id + 1
            const responseNext = await axios.get(`https://pokeapi.co/api/v2/pokemon/${obj.nextId}`)
            obj.nextName = responseNext.data.name
            obj.height = response.data.height
            obj.weight = response.data.weight
            obj.ability1 = response.data.abilities[0].ability.name
            try { obj.ability2 = response.data.abilities[1].ability.name }
            catch { }
            obj.hp = response.data.stats[0].base_stat
            obj.attack = response.data.stats[1].base_stat
            obj.defense = response.data.stats[2].base_stat
            obj.specialAttack = response.data.stats[3].base_stat
            obj.specialDefense = response.data.stats[4].base_stat
            obj.speed = response.data.stats[5].base_stat
            const responseFlavor = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${alias}`)
            obj.flavor = responseFlavor.data.flavor_text_entries[16].flavor_text
            temp.push(obj)
            setCurrentPokemon(obj)


        }
        if (pokemons.length === 0) {
            fetchPokemons()

        } else {
            for (let pokemon of pokemons) {
                if (!pokemon[name]) {
                    fetchPokemons();
                }
                else
                    setCurrentPokemon(prevCurrentPokemon => prevCurrentPokemon = pokemon)
            }

        }

        setPokemons(prevPokemons => prevPokemons.concat(temp));




    }, [name]);

    return (
        <CurrentPokemonContext.Provider value={{ currentPokemon, setCurrentPokemon }}>
            <div className='pokemonPage'>
                <NavigBar />
                <PokemonSpecies />
                <Evolutions />

            </div>
        </CurrentPokemonContext.Provider>
    );
};

export default PokemonPage;