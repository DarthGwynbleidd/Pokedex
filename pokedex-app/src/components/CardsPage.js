import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import AdvancedResearch from './AdvancedResearch';
import TopButtons from './TopButtons';
import Grid from './Grid';
import BottomButton from './BottomButton';
import PokemonContext from '../contexts/PokemonContext';
import DisplayContext from '../contexts/DisplayContext';
import nameTranslate from '../jsonfiles/pokemon_translate.json'

const CardsPage = () => {
    const { setPokemons } = useContext(PokemonContext);
    const [group, setGroup] = useState(1)
    const [display, setDisplay] = useState("displayNumericUp")


    const frenchNames = Object.keys(nameTranslate).map(element => {
        return element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }).sort()

    useEffect(() => {

        async function fetchPokemons() {

            const temp = []
            const responseLength = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/`)
            const length = responseLength.data.count + 1

            for (let number = group; number < group + 12; number++) {
                let alias = ''
                if (display === 'randomVice' || display === 'randomVersa') {
                    alias = Math.floor(Math.random() * (length - 1)) + 1
                }
                else if (display === 'displayNumericUp') {
                    alias = number
                    if (number === length)
                        break
                }
                else if (display === 'displayNumericDown') {
                    alias = length - number
                    if (alias < 1)
                        break
                }
                else if (display === 'displayAlphaUp') {
                    for (let name in nameTranslate) {
                        let noAccent = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        if (noAccent === frenchNames[number - 1])
                            alias = nameTranslate[name]
                    }
                }
                else if (display === 'displayAlphaDown') {
                    for (let name in nameTranslate) {
                        let noAccent = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        if (noAccent === frenchNames[length - number - 1])
                            alias = nameTranslate[name]
                    }
                }

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${alias}`)

                const obj = {
                    id: "",
                    name: "",
                    image: "",
                    type1: "",
                    type2: "",
                    prevId: "",
                    prevName: "",
                    nextId: "",
                    nextName: "",
                    weight: "",
                    height: "",
                    ability1: "",
                    ability2: "",
                    stats: {
                        hp: null,
                        attack: null,
                        defense: null,
                        specialAttack: null,
                        specialDefense: null,
                        speed: null
                    }
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
                obj.stats.hp = response.data.stats[0].base_stat
                obj.stats.attack = response.data.stats[1].base_stat
                obj.stats.defense = response.data.stats[2].base_stat
                obj.stats.specialAttack = response.data.stats[3].base_stat
                obj.stats.specialDefense = response.data.stats[4].base_stat
                obj.stats.speed = response.data.stats[5].base_stat


                temp.push(obj)

            }
            setPokemons(prevPokemons => prevPokemons.concat(temp));
        }
        fetchPokemons();
    }, [group, setPokemons, display]);

    return (
        <DisplayContext.Provider value={{ display, setDisplay }}>
            <div className='cardsPage'>
                <AdvancedResearch />
                <TopButtons />
                <Grid />
                <BottomButton setGroup={setGroup} />
            </div>
        </DisplayContext.Provider>
    );
};

export default CardsPage;