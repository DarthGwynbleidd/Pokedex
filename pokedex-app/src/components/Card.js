import React from 'react';
import typeTranslate from '../jsonfiles/type_translate.json'

const Card = (props) => {
    const translate = (typeName) => {


        let vfType = ''
        for (let type in typeTranslate) {
            if (type.toLowerCase() === typeName)
                vfType = typeTranslate[type]
        } console.log(vfType)
        return vfType.toLowerCase()
    }
    return (
        <div className='card'>
            <figure className='card_picture'>
                <img src={props.image} alt={props.name} />
            </figure>
            <div className='card_desc'>
                <p><span>No. {props.id}</span></p>
                <h5>{props.pokemonName}</h5>
                <div className='card_desc_abilities'>
                    <span className={`pill ${translate(props.type1)}`}>{translate(props.type1)}</span>
                </div>
                <div className='card_desc_abilities'>
                    <span className={`pill ${translate(props.type2)}`}>{translate(props.type2)}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;