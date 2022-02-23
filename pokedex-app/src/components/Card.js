import React from 'react';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'

const Card = (props) => {
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
        <div className='card'>
            <figure className='card_picture'>
                <img src={props.image} alt={props.name} />
            </figure>
            <div className='card_desc'>
                <p><span>No. {props.id}</span></p>
                <h5>{translateName(props.pokemonName)}</h5>
                <div className='card_desc_abilities'>
                    <span className={`pill ${translateType(props.type1)}`}>{translateType(props.type1)}</span>
                </div>
                <div className='card_desc_abilities'>
                    <span className={`pill ${translateType(props.type2)}`}>{translateType(props.type2)}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;