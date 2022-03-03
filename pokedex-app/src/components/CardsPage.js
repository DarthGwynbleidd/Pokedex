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
                    gender: "",
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