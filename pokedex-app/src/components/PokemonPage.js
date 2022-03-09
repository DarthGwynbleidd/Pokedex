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

    let alias = ""

    useEffect(() => {
        const temp = []


        for (let element in nameTranslate) {
            let noAccent = element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            if (noAccent === pokemonNameNoAccent)
                alias = nameTranslate[element]
        }
        async function fetchPokemons() {

            const responseLength = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/`)
            const length = responseLength.data.count + 1



            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${alias}`)

            const obj = {
                id: "",
                pokemonName: "",
                image: "",
                type1: "",
                type2: "",
                weaknesses: [],
                prevId: "",
                prevName: "",
                nextId: "",
                nextName: "",
                weight: "",
                height: "",
                gender: "",
                abilities: [],
                flavor: [],
                hp: '',
                attack: '',
                defense: '',
                specialAttack: '',
                specialDefense: '',
                speed: '',
                evolution_chain: ''
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
            for (const index of response.data.abilities) {
                let tmpAbility = index.ability.name
                if (index.is_hidden === false)
                    obj.abilities.push(tmpAbility)
            }
            obj.hp = response.data.stats[0].base_stat
            obj.attack = response.data.stats[1].base_stat
            obj.defense = response.data.stats[2].base_stat
            obj.specialAttack = response.data.stats[3].base_stat
            obj.specialDefense = response.data.stats[4].base_stat
            obj.speed = response.data.stats[5].base_stat
            const responseFlavor = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${alias}`)
            for (const index of responseFlavor.data.flavor_text_entries) {
                if (index.language.name === 'fr') {
                    let tmpFlavor = index.flavor_text.replace(/\s+/g, ' ')
                    if (!(obj.flavor.includes(tmpFlavor)))
                        obj.flavor.push(tmpFlavor)
                }
            }
            obj.evolution_chain = responseFlavor.data.evolution_chain.url
            const responseTypeOne = await axios.get(`https://pokeapi.co/api/v2/type/${obj.type1}`)
            for (let weak of responseTypeOne.data.damage_relations.double_damage_from) {
                obj.weaknesses.push(weak.name)
            }
            try {
                const responseTypeTwo = await axios.get(`https://pokeapi.co/api/v2/type/${obj.type2}`)
                for (let weak of responseTypeTwo.data.damage_relations.double_damage_from) {
                    obj.weaknesses.push(weak.name)
                }
            } catch { }
            temp.push(obj)
            setCurrentPokemon(obj)
        }
        if (pokemons.length === 0) {
            fetchPokemons()

        } else {
            let isIn = false
            for (let pokemon of pokemons) {
                if (pokemon.pokemonName === alias) {
                    isIn = true
                    setCurrentPokemon(pokemon)
                }
            }
            if (!isIn)
                fetchPokemons()
        }
        setPokemons(prevPokemons => prevPokemons.concat(temp));
    }, [name]);

    return (
        <CurrentPokemonContext.Provider value={{ currentPokemon, setCurrentPokemon }}>
            <div className='pokemonPage'>
                <NavigBar />
                <PokemonSpecies />
                {/* <Evolutions /> */}

            </div>
        </CurrentPokemonContext.Provider>
    );
};

export default PokemonPage;