import React, { useState } from 'react';
import AutoSuggest from 'react-autosuggest';
import nameTranslate from '../jsonfiles/pokemon_translate.json'


const SearchBar = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    suggestions.length = 3;

    const frenchNames = Object.keys(nameTranslate).map(element => {
        return element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    })

    // const lowerCasedCompanies = frenchNames.map(frenchName => {
    //     return {
    //         id: frenchName.id,
    //         name: frenchName.name.toLowerCase()
    //     };
    // });




    function getSuggestions(value) {

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : frenchNames.filter(frenchName => 
            frenchName.slice(0, inputLength) === inputValue
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
                getSuggestionValue={suggestion => suggestion}
                renderSuggestion={suggestion => <span>{suggestion}</span>}
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