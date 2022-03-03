import React, { useContext } from 'react';
import PokemonContext from '../contexts/PokemonContext';



const NavigBar = (props) => {
    const { pokemons, setPokemons } = useContext(PokemonContext);

    return (
        <div className='navigbar'>
            <div className='navigbar__top'>
                <div className='navigbar__top__previous'>
                    &#60; N°.024   Arbok
                </div>
                <div className='navigbar__top__home'>
                    Retour
                </div>
                <div className='navigbar__top__next'>
                    Raichu  N°.026 &#62;
                </div>
            </div>
            <div className='navigbar__bottom'>
                <div className='navigbar__bottom__blocLeft'>
                    <div className='navigbar__bottom__blocLeft__leftSup'></div>
                    <div className='navigbar__bottom__blocLeft__leftInf'></div>
                </div>
                <div className='navigbar__bottom__center'>{props.name} <span> N°.025</span></div>
                <div className='navigbar__bottom__blocRight'>
                    <div className='navigbar__bottom__blocRight__rightSup'></div>
                    <div className='navigbar__bottom__blocRight__rightInf'></div>
                </div>
            </div>
        </div>
    );
};

export default NavigBar;