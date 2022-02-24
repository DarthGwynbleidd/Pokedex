import React, { useContext } from 'react';
import DisplayContext from '../contexts/DisplayContext';
import PokemonContext from '../contexts/PokemonContext';

const RandomSelect = () => {

    const { display, setDisplay } = useContext(DisplayContext)
    const { setPokemons } = useContext(PokemonContext)

    const handleClick = () => {
        setDisplay('random')
        setPokemons([])
    }

    return (
        <div className='randomSelect'>

            <button onClick={handleClick} className='randomSelect__button'><img src="./assets/top-buttons/random-logo.png" alt='random' />
                <span className='randomSelect__button__p'>Surprise</span></button>
            <div className='randomSelect__wrapper'>
                <img className='randomSelect__wrapper__pokeball' src='./assets/top-buttons/select-logo.png' alt='pokeball' />
                <select className='randomSelect__wrapper__select'>

                    <option value="search by number">Choisissez une option</option>
                    <option value="search by number" selected>Tri par ordre croissant</option>
                    <option value="search by number">Tri par ordre décroissant</option>
                    <option value="search by A-Z">Tri de A-Z</option>
                    <option value="search by Z-A">Tri de Z-A</option>

                </select>

            </div>
        </div>
    );
};

export default RandomSelect;