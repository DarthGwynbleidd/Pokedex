import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import CurrentPokemonContext from '../contexts/CurrentPokemonContext';
import BackUpContext from '../contexts/BackupContext'

const NavigBar = () => {
    const { setBackUp } = useContext(BackUpContext)
    const { currentPokemon } = useContext(CurrentPokemonContext)
    const translateName = (pokemonName) => {
        let vfName = ''
        for (let name in nameTranslate) {
            if (nameTranslate[name].toLowerCase() === pokemonName)
                vfName = name
        }
        return vfName
    }


    const addZero = (number) => {
        return +number < 10 ? `00${+number}` : `0${+number}`
    }

    return (
        <div className='navigbar'>
            <div className='navigbar__top'>
                <NavLink to={`/:${translateName(currentPokemon.prevName)}`} className='navigbar__top__previous'>
                    &#60; N°. {currentPokemon.prevId < 100 ? addZero(currentPokemon.prevId) : currentPokemon.prevId}  {translateName(currentPokemon.prevName)}
                </NavLink>
                <NavLink onClick={setBackUp(prevBackUp => prevBackUp = true)} to="/" className='navigbar__top__home'>
                    Retour
                </NavLink>
                <NavLink to={`/:${translateName(currentPokemon.nextName)}`} className='navigbar__top__next'>
                    {translateName(currentPokemon.nextName)}  N°. {currentPokemon.nextId < 100 ? addZero(currentPokemon.nextId) : currentPokemon.nextId} &#62;
                </NavLink>

            </div>
            <div className='navigbar__bottom'>
                <div className='navigbar__bottom__blocLeft'>
                    <div className='navigbar__bottom__blocLeft__leftSup'></div>
                    <div className='navigbar__bottom__blocLeft__leftInf'></div>
                </div>
                <div className='navigbar__bottom__center'>{translateName(currentPokemon.pokemonName)} <span> N°. {currentPokemon.id < 100 ? addZero(currentPokemon.id) : currentPokemon.id}</span></div>
                <div className='navigbar__bottom__blocRight'>
                    <div className='navigbar__bottom__blocRight__rightSup'></div>
                    <div className='navigbar__bottom__blocRight__rightInf'></div>
                </div>
            </div>
        </div>
    );
};

export default NavigBar;