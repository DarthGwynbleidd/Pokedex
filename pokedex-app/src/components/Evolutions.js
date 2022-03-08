import React, { useContext, useState } from 'react';
import PokemonContext from '../contexts/PokemonContext';
import CurrentPokemonContext from '../contexts/CurrentPokemonContext';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import abilitiesTranslate from '../jsonfiles/abilities_translate.json'


const Evolutions = (props) => {
    const { currentPokemon } = useContext(CurrentPokemonContext)
    const [nbrMax, setNbrMax] = useState('__max')

    const addZero = (number) => {
        return +number < 10 ? `00${+number}` : `0${+number}`
    }

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

    const translateAbilities = (abilityName) => {
        let vfAbility = ''
        for (let ability in abilitiesTranslate){
            if (abilitiesTranslate[ability].toLowerCase() === abilityName)
            vfAbility = ability
        }
        return vfAbility
    }
    


    return (
        <div className='containerevolution'>
            <div className='containerevolution__title'>
                <h3>Evolutions</h3>
            </div>

            <div className='containerevolution__mainboxcard'>
                <div className='containerevolution__mainboxcard__cardevo1'>
                    <div className='containerevolution__mainboxcard__cardevo1__evo'>
                        <figure className='containerevolution__mainboxcard__cardevo1__evo__picture'>
                            <img src={currentPokemon.image} alt="img" />
                        </figure>
                        <div className='containerevolution__mainboxcard__cardevo1__evo__desc'>
                            <div className='containerevolution__mainboxcard__cardevo1__evo__desc__name'>
                                <h5>{translateName(currentPokemon.pokemonName)}</h5>
                                <p><span>#{currentPokemon.id < 100 ? addZero(currentPokemon.id) : currentPokemon.id}</span></p>
                            </div>
                            <div className='containerevolution__mainboxcard__cardevo1__evo__desc__type'>
                                <div className='containerevolution__mainboxcard__cardevo1__evo__desc__type__abilities'>
                                    <span className={`pill ${translateType(currentPokemon.type1)}`}>{translateType(currentPokemon.type1)}</span>
                                </div>
                                <div className='containerevolution__mainboxcard__cardevo1__evo__desc__type__abilities'>
                                    <span className={`pill ${translateType(currentPokemon.type2)}`}>{translateType(currentPokemon.type2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className='containerevolution__mainboxcard__chevron1'>&#62;</div>
                <div className='containerevolution__mainboxcard__cardevo2'>

                    <div className='containerevolution__mainboxcard__cardevo2__evo'>
                        <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax}`}>
                            <img src={currentPokemon.image} alt="img" />
                        </figure>
                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                            <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax}`}>
                                <h5>{translateName(currentPokemon.pokemonName)}</h5>
                                <p><span>#{currentPokemon.id < 100 ? addZero(currentPokemon.id) : currentPokemon.id}</span></p>
                            </div>
                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type1)}`}>{translateType(currentPokemon.type1)}</span>
                                </div>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type2)}`}>{translateType(currentPokemon.type2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='containerevolution__mainboxcard__cardevo2__evo'>
                        <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax}`}>
                            <img src={currentPokemon.image} alt="img" />
                        </figure>
                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                            <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax}`}>
                                <h5>{translateName(currentPokemon.pokemonName)}</h5>
                                <p><span>#{currentPokemon.id < 100 ? addZero(currentPokemon.id) : currentPokemon.id}</span></p>
                            </div>
                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type1)}`}>{translateType(currentPokemon.type1)}</span>
                                </div>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type2)}`}>{translateType(currentPokemon.type2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='containerevolution__mainboxcard__cardevo2__evo'>
                        <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax}`}>
                            <img src={currentPokemon.image} alt="img" />
                        </figure>
                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                            <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax}`}>
                                <h5>{translateName(currentPokemon.pokemonName)}</h5>
                                <p><span>#{currentPokemon.id < 100 ? addZero(currentPokemon.id) : currentPokemon.id}</span></p>
                            </div>
                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type1)}`}>{translateType(currentPokemon.type1)}</span>
                                </div>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type2)}`}>{translateType(currentPokemon.type2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='containerevolution__mainboxcard__cardevo2__evo'>
                        <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax}`}>
                            <img src={currentPokemon.image} alt="img" />
                        </figure>
                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                            <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax}`}>
                                <h5>{translateName(currentPokemon.pokemonName)}</h5>
                                <p><span>#{currentPokemon.id < 100 ? addZero(currentPokemon.id) : currentPokemon.id}</span></p>
                            </div>
                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type1)}`}>{translateType(currentPokemon.type1)}</span>
                                </div>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type2)}`}>{translateType(currentPokemon.type2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='containerevolution__mainboxcard__cardevo2__evo'>
                        <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax}`}>
                            <img src={currentPokemon.image} alt="img" />
                        </figure>
                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                            <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax}`}>
                                <h5>{translateName(currentPokemon.pokemonName)}</h5>
                                <p><span>#{currentPokemon.id < 100 ? addZero(currentPokemon.id) : currentPokemon.id}</span></p>
                            </div>
                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type1)}`}>{translateType(currentPokemon.type1)}</span>
                                </div>
                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                <span className={`pill ${translateType(currentPokemon.type2)}`}>{translateType(currentPokemon.type2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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