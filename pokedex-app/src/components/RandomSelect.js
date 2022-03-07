import React, { useContext, useState } from 'react';
import DisplayContext from '../contexts/DisplayContext';
import PokemonContext from '../contexts/PokemonContext';

const RandomSelect = () => {
    const [optionSelected, setOptionSelected] = useState('displayNumericUp')
    const { display, setDisplay } = useContext(DisplayContext)
    const { setPokemons } = useContext(PokemonContext)
    const {setGroup} = useContext(DisplayContext)

    // Quand on click sur 'random', on envoie la requette et on force le select sur 'choisissez une option'
    const handleClick = () => {
        if (display === 'randomVice')
            setDisplay('randomVersa')
        else if (display === 'randomVersa')
            setDisplay('randomVice')
        else setDisplay('randomVersa')
        setOptionSelected('default')
        setPokemons([])
        setGroup(1)
    }
    // Au changement de selection
    const handleChange = (event) => {
        // Si la valeur est 'choisissez une option' on force sur 'Tri par ordre croissant'
        if(event.target.value === "default"){
            setDisplay('displayNumericUp')
            setOptionSelected('displayNumericUp')
        }
        // Sinon on prend la valeur selectionnée
        else {
            setDisplay(event.target.value)
            setOptionSelected(event.target.value)
        }
        setPokemons([])
        setGroup(1)
    }
    return (
        <div className='randomSelect'>

            <button onClick={handleClick} className='randomSelect__button'><img src="./assets/top-buttons/random-logo.png" alt='random' />
                <span className='randomSelect__button__p'>Surprise</span></button>
            <div className='randomSelect__wrapper'>
                <img className='randomSelect__wrapper__pokeball' src='./assets/top-buttons/select-logo.png' alt='pokeball' />
                <select id="selectBox" onChange={handleChange} value={optionSelected} className='randomSelect__wrapper__select'>

                    <option value="default">Choisissez une option</option>
                    <option value="displayNumericUp">Tri par ordre croissant</option>
                    <option value="displayNumericDown">Tri par ordre décroissant</option>
                    <option value="displayAlphaUp">Tri de A-Z</option>
                    <option value="displayAlphaDown">Tri de Z-A</option>

                </select>

            </div>
        </div>
    );
};

export default RandomSelect;