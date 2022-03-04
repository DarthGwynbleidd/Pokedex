import React, { useState } from 'react';
import AutoSuggest from 'react-autosuggest';
import nameTranslate from '../jsonfiles/pokemon_translate.json'


const SearchBar = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const frenchNames = Object.keys(nameTranslate).map(element => {
        return element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    })
    console.log(frenchNames)
    function getSuggestions(value) {
        return frenchNames.filter(frenchName =>
            frenchName.includes(value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        );
    }
    return (
        <div className='searchbar'>
            <AutoSuggest className='search'
                suggestions={suggestions}
                onSuggestionsClearRequested={() => setSuggestions([])}
                onSuggestionsFetchRequested={({ value }) => {
                    console.log(value);
                    setValue(value);
                    setSuggestions(getSuggestions(value));
                }}
                onSuggestionSelected={(_, { suggestionValue }) =>
                    console.log("Selected: " + suggestionValue)
                }
                getSuggestionValue={suggestion => frenchNames.name}
                renderSuggestion={suggestion => <span>{frenchNames.name}</span>}
                inputProps={{
                    placeholder: 'Nom ou numéro',
                    value: value,
                    onChange: (_, { newValue, method }) => {
                        setValue(newValue);
                    }
                }}
                highlightFirstSuggestion={true}
            />
            <div onClick={() => { }} className='searchbutton'>
                <img className='imgloupe' src="./assets/cards-page/icon.png" alt="pics" />
            </div>
        </div >

    );
};

export default SearchBar;