import React, { useContext } from 'react';

import DisplayContext from '../contexts/DisplayContext';
import PokemonContext from '../contexts/PokemonContext';

const RandomSelect = () => {

    const { display, setDisplay } = useContext(DisplayContext)
    const { setPokemons } = useContext(PokemonContext)

    const handleClick = () => {
        if (display === 'randomVice')
            setDisplay('randomVersa')
        else if (display === 'randomVersa')
            setDisplay('randomVice')
        else setDisplay('randomVersa')
        setPokemons([])
    }
    const handleChange = (event) => {
        setDisplay(event.target.value)
        setPokemons([])
    }
    return (
        <div className='randomSelect'>

            <button onClick={handleClick} className='randomSelect__button'><img src="./assets/top-buttons/random-logo.png" alt='random' />
                <span className='randomSelect__button__p'>Surprise</span></button>
            <div className='randomSelect__wrapper'>
                <img className='randomSelect__wrapper__pokeball' src='./assets/top-buttons/select-logo.png' alt='pokeball' />
                <select id="selectBox" onChange={handleChange} className='randomSelect__wrapper__select'>

                    <option selected value="default" disabled>Choisissez une option</option>
                    <option value="displayNumericUp" >Tri par ordre croissant</option>
                    <option value="displayNumericDown">Tri par ordre décroissant</option>
                    <option value="displayAlphaUp">Tri de A-Z</option>
                    <option value="displayAlphaDown">Tri de Z-A</option>

                </select>

            </div>
        </div>
    );
};

export default RandomSelect;