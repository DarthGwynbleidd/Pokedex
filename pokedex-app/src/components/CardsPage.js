import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import AdvancedResearch from './AdvancedResearch';
import TopButtons from './TopButtons';
import Grid from './Grid';
import BottomButton from './BottomButton';
import PokemonContext from '../contexts/PokemonContext';
import DisplayContext from '../contexts/DisplayContext';

const CardsPage = () => {
    const { setPokemons } = useContext(PokemonContext);
    const [group, setGroup] = useState(1)
    const [display, setDisplay] = useState("numericUp")


    useEffect(() => {

        async function fetchPokemons() {

            const temp = []
            const responseLength = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/`)
            const length = responseLength.data.count


            for (let number = group; number < group + 12; number++) {
                let alias = ''
                if (display === 'random') {
                    alias = Math.floor(Math.random() * (length - 1)) + 1
                }
                else if (display === 'numericUp') {
                    alias = number
                    if (number === length + 1) {
                        break
                    }
                }
                // else if (display === 'numericDown') {

                // }
                // else if (display === 'alphaUp') {

                // }
                // else if (display === 'alphaDown') {

                // }

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