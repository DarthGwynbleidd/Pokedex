import React from 'react';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import PokemonStats from './PokemonStats';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    // const effetClass = `card_${Math.floor(Math.random() * (5 - 1) + 1)}`;// chiffre aléatoire (1 à 4) pour className card

    const translateName = (pokemonName) => {
        let vfName = ''
        for (let name in nameTranslate) {
            if (nameTranslate[name].toLowerCase() === pokemonName)
                vfName = name
        }
        return vfName
    }
    const translateType = (typeName) => {
        let vfType = ''
        for (let type in typeTranslate) {
            if (type.toLowerCase() === typeName)
                vfType = typeTranslate[type]
        }
        return vfType.toLowerCase()
    }
    
    const addZero = (number) => {
        return +number < 10? `00${+number}` : `0${+number}`
    }

    return (
        <NavLink to={`/:${translateName(props.pokemonName)}`} className='card'>
            <div className='card_vide'>
                <figure className='card_vide_picture'>
                    <img src={props.image} alt={props.name} />
                </figure>
                <div className='card_vide_desc'>
                    <p><span>No. {props.id< 100? addZero(props.id) : props.id}</span></p>
                    <h5>{translateName(props.pokemonName)}</h5>
                    <div className='card_vide_desc_abilities'>
                        <span className={`pill ${translateType(props.type1)}`}>{translateType(props.type1)}</span>
                    </div>
                    <div className='card_vide_desc_abilities'>
                        <span className={`pill ${translateType(props.type2)}`}>{translateType(props.type2)}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Card;