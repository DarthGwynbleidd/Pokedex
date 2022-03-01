import React from 'react';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import PokemonStats from './PokemonStats';

const Card = (props) => {
    // const effetClass = `card_${Math.floor(Math.random() * (5 - 1) + 1)}`;// chiifre aléatoire (1 à 4) pour className card
    
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
    return (
        <div className= 'card'>
            <div className='card_vide'>
            <figure className='card_vide_picture'>
                <img src={props.image} alt={props.name}/>
            </figure>
            <div className='card_vide_desc'>
                <p><span>No. {props.id}</span></p>
                <h5>{translateName(props.pokemonName)}</h5>
                <div className='card_vide_desc_abilities'>
                    <span className={`pill ${translateType(props.type1)}`}>{translateType(props.type1)}</span>
                </div>
                <div className='card_vide_desc_abilities'>
                    <span className={`pill ${translateType(props.type2)}`}>{translateType(props.type2)}</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;