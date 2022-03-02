import React, { useContext } from 'react';
import PokemonContext from '../contexts/PokemonContext';



const Evolutions = (props) => {
    const { pokemons } = useContext(PokemonContext);
    console.log(props)
    console.log(pokemons)
    return (
        <div className='containerevolution'>
            <div className='containerevolution__title'>
                <p>Evolutions</p>
            </div>

            <div className='containerevolution__mainboxcard'>
                {/* <div className='containerevolution__mainboxcard__cardevo1'>  */}
                <div className='containerevolution__mainboxcard__card__evo'>
                    <figure className='containerevolution__mainboxcard__card__evo__picture'>
                        <img src={pokemons[props.id].image} alt="img" />
                    </figure>
                    <div className='containerevolution__mainboxcard__card__evo__desc'>
                        <p><span>No. {pokemons[props.id].id}</span></p>
                        <h5>{pokemons[props.id].name}</h5>
                        <div className='containerevolution__mainboxcard__card__evo__abilities'>
                            <span className={`pill ${pokemons[props.id].type1}`}>{pokemons[props.id].Type1}</span>
                        </div>
                        <div className='containerevolution__mainboxcard__card__evo__abilities'>
                            <span className={`pill ${pokemons[props.id].type2}`}>{pokemons[props.id].type2}</span>
                        </div>
                    </div>
                </div>

                <div className='containerevolution__mainboxcard__chevron1'></div>

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