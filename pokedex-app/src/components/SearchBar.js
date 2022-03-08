import React, { useState } from 'react';
import AutoSuggest from 'react-autosuggest/dist/Autosuggest';
import { NavLink } from 'react-router-dom';
import nameTranslate from '../jsonfiles/pokemon_translate.json'


const SearchBar = () => {
    const [value, setValue] = useState("");
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
    if (Number.isInteger(value)) {
        setValue(pokemons.id)
    }





    function getSuggestions(value) {
        return pokemons.filter(pokemon =>
            pokemon.name.includes(value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        );
    }
    return (
        <div className='searchbar'>
            <AutoSuggest className='search'
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
            <NavLink to={`/:${value}`} className='searchbutton'>
                <img className='imgloupe' src="./assets/cards-page/icon.png" alt="pics" />
            </NavLink>

        </div >

    );
};

export default SearchBar;