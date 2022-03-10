import React, { useContext, useEffect, useState } from 'react';
import CurrentPokemonContext from '../contexts/CurrentPokemonContext';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import axios from 'axios';

const Evolutions = () => {
    const { currentPokemon } = useContext(CurrentPokemonContext)
    const [nbrMax, setNbrMax] = useState('')
    let evoChain = {}

    useEffect(() => {

        async function fetchInfos(name) {
            const obj = {}
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            obj.pokemonName = name
            obj.id = response.data.id;
            obj.image = response.data.sprites.other["official-artwork"].front_default;
            obj.type1 = response.data.types[0].type.name;
            try {
                obj.type2 = response.data.types[1].type.name;
            } catch (error) {

            }
            obj.to = []
            return obj
        }

        async function fetchEvolutions(array) {
            if (array[0].evolves_to.length > 0) {
                let tmp = await fetchInfos(array[0].species.name)
                tmp.to = array[0].evolves_to.map(evolution => {
                    return fetchEvolutions([evolution])
                })
                return tmp
            } else {
                return fetchInfos(array[0].species.name)
            }
        }
        async function apiCall (){
            const response = await axios.get(`${currentPokemon.evolution_chain}`)
            evoChain = await fetchEvolutions([response.data.chain])
            console.log(evoChain);
        }
        if (Object.keys(currentPokemon).length !== 0) {
            apiCall()
        }
    }, [currentPokemon])
    
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