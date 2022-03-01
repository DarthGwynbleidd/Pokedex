import React from 'react';
import PokemonStats from './PokemonStats'

const PokemonDetail = () => {
    return (
        <div className='pokemon'>
            <div className='pokemon__left'>
                <div className='pokemon__left__img'>
                   <img src='../../public/assets/bulbizarre.png' alt='bulbizar' />
                </div>
                <div className='pokemon__left__stat' >
                <PokemonStats />
                </div>
            </div> 
            <div className='pokemon__rigth'>
                <p className ='pokemon__rigth__anotation'></p> 
                <div className='pokemon__rigth__mensuration'>

                </div>
                <div className='pokemon__rigth__type'>

                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;