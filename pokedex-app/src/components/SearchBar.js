import React, { useState } from 'react';
import AutoSuggest from 'react-autosuggest/dist/Autosuggest';
import { useNavigate, NavLink } from 'react-router-dom';
import nameTranslate from '../jsonfiles/pokemon_translate.json'


const SearchBar = () => {
    const [value, setValue] = useState("");
    // const [input, setInput] = useState("")
    const [suggestions, setSuggestions] = useState([]);

    const frenchNames = Object.keys(nameTranslate).map(element => {
        return element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    })

    const pokemons = frenchNames.map((frenchName, index) => {
        return {
            id: index + 1,
            name: frenchName
        };
    });
    let input = ""
    if (Number.isInteger(+value)) {

        for (let index of pokemons) {

            if (index.id === +value) {

                input = index.name
            }
        }

    } else input = value

    // const navigate = useNavigate()
    // const handlePress = (event) =>{
    //     console.log(event.keyCode)
    //     if(event.keyCode === 13){
    //         navigate(`/:${input}`)
    //     }
    // }




    function getSuggestions(value) {
        return pokemons.filter(pokemon =>
            pokemon.name.includes(value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        );
    }
    return (
        <div className='searchbar'>
            
                <AutoSuggest /*onKeyPress = {handlePress}*/ className='search'
                    suggestions={suggestions.slice(0, 5)}
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    onSuggestionsFetchRequested={({ value }) => {
                        // console.log(value);
                        setValue(value);
                        setSuggestions(getSuggestions(value));
                    }}
                    onSuggestionSelected={(_, { suggestionValue }) =>
                        console.log("Selected: " + suggestionValue)
                    }
                    getSuggestionValue={suggestion => suggestion.name}
                    renderSuggestion={suggestion => {

                        return <span>{suggestion.name}</span>
                    }}
                    inputProps={{
                        placeholder: 'Nom ou numéro',
                        value: value,
                        onChange: (_, { newValue, method }) => {
                            setValue(newValue);
                        }
                    }}
                    highlightFirstSuggestion={true}
                />
            
            <NavLink to={`/:${input}`} onClick= {console.log(input)}className='searchbutton'>
                <img className='imgloupe' src="./assets/cards-page/icon.png" alt="pics" />
            </NavLink>

        </div >

    );
};

export default SearchBar;