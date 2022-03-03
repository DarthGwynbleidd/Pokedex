import React from 'react';
import { NavLink } from 'react-router-dom';
import nameTranslate from '../jsonfiles/pokemon_translate.json'

const NavigBar = (props) => {

    const translateName = (pokemonName) => {
        let vfName = ''
        for (let name in nameTranslate) {
            if (nameTranslate[name].toLowerCase() === pokemonName)
                vfName = name
        }
        return vfName
    }

    return (
        <div className='navigbar'>
            <div className='navigbar__top'>
                <div className='navigbar__top__previous'>
                    &#60; N°. {props.prevId}  {translateName(props.prevName)}
                </div>
                <NavLink to="/" className='navigbar__top__home'>
                    Retour
                </NavLink>
                <div className='navigbar__top__next'>
                    {translateName(props.nextName)}  N°. {props.nextId} &#62;
                </div>
            </div>
            <div className='navigbar__bottom'>
                <div className='navigbar__bottom__blocLeft'>
                    <div className='navigbar__bottom__blocLeft__leftSup'></div>
                    <div className='navigbar__bottom__blocLeft__leftInf'></div>
                </div>
                <div className='navigbar__bottom__center'>{translateName(props.pokemonName)} <span> N°. {props.id}</span></div>
                <div className='navigbar__bottom__blocRight'>
                    <div className='navigbar__bottom__blocRight__rightSup'></div>
                    <div className='navigbar__bottom__blocRight__rightInf'></div>
                </div>
            </div>
        </div>
    );
};

export default NavigBar;