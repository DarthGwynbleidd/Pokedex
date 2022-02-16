import React from 'react';

const BottomButton = () => {
    return (
        <div className='bottom_button'>
            <div className='bottom_button--more'>
                <button onClick={() => {}}>Charger d'autres Pokémons</button>
            </div>
            <div className='bottom_button--up'>
                <img src='./assets/fleche_haut.png' alt='Fleche'></img>
            </div>
        </div>
    );
};

export default BottomButton;