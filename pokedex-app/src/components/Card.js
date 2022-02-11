import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <figure className='card_picture'>
                <img src={props.image} alt={props.name} />
            </figure>
            <div className='card_desc'>
                <p><span>No. {props.number}</span></p>
                <h5>{props.name}</h5>
                <div className='card_desc_abilities'>
                    <span className={`pill ${props.type1}`}>{props.type1}</span>
                </div>
                <div className='card_desc_abilities'>
                    <span className={`pill ${props.type2}`}>{props.type2}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;