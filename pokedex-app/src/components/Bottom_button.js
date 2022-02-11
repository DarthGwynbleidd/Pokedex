import React from 'react';

const Bottom_button = () => {
    return (
        <div className='bottom_button'>
            <div className='bottom_button--more'>
                <button onClick={() => {}}>Charger d'autres Pokémons</button>
            </div>
            <div className='bottom_button--up'>
                <img src='./assets/fleche_haut.png'></img>
            </div>
        </div>
    );
};

export default Bottom_button;