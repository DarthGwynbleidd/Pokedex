import React, { useContext } from 'react';
import PokemonContext from '../contexts/PokemonContext';
import CurrentPokemonContext from '../contexts/CurrentPokemonContext';



const Evolutions = (props) => {
    const { currentPokemon } = useContext(CurrentPokemonContext)


    const addZero = (number) => {
        return +number < 10 ? `00${+number}` : `0${+number}`
    }


    return (
        <div className='containerevolution'>
            <div className='containerevolution__title'>
                <p>Evolutions</p>
            </div>

            <div className='containerevolution__mainboxcard'>
                {/* <div className='containerevolution__mainboxcard__cardevo1'>  */}
                <div className='containerevolution__mainboxcard__card__evo'>
                    <figure className='containerevolution__mainboxcard__card__evo__picture'>
                        <img src={currentPokemon.image} alt="img" />
                    </figure>
                    <div className='containerevolution__mainboxcard__card__evo__desc'>
                        <div className='containerevolution__mainboxcard__card__evo__desc__name'>
                            <h5>{currentPokemon.pokemonName}</h5>
                            <p><span>#{addZero(currentPokemon.id)}</span></p>
                        </div>
                        <div className='containerevolution__mainboxcard__card__evo__desc__type'>
                            <div className='containerevolution__mainboxcard__card__evo__desc__type__abilities'>
                                <span className={`pill ${currentPokemon.type1}`}>{currentPokemon.type1}</span>
                            </div>
                            <div className='containerevolution__mainboxcard__card__evo__desc__type__abilities'>
                                <span className={`pill ${currentPokemon.type2}`}>{currentPokemon.type2}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='containerevolution__mainboxcard__chevron1'>  </div>

                {/* <div className='containerevolution__mainboxcard__cardevo2'>
                        <div className='card_evo'>
                            <figure className='card_evo_picture'>
                                <img src={ } alt={ } />
                            </figure>
                            <div className='card_evo_desc'>
                                <p><span>No. { }</span></p>
                                <h5>{translateName()}</h5>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                <div className='containerevolution__mainboxcard__chevron2'></div>
                {/* 
                    <div className='containerevolution__mainboxcard__cardevo3'>
                        <div className='card_evo'>
                            <figure className='card_evo_picture'>
                                <img src={ } alt={ } />
                            </figure>
                            <div className='card_evo_desc'>
                                <p><span>No. { }</span></p>
                                <h5>{translateName()}</h5>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                                <div className='card_evo_desc_abilities'>
                                    <span className={`pill ${translateType()}`}>{translateType()}</span>
                                </div>
                            </div>
                        </div>
                    </div> */}

                {/* </div> */}
            </div>
        </div>

    );
};

export default Evolutions;