import React, { useContext, useEffect, useState } from 'react';
import CurrentPokemonContext from '../contexts/CurrentPokemonContext';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import axios from 'axios';

const Evolutions = () => {
    const { currentPokemon } = useContext(CurrentPokemonContext)
    const [nbrMax, setNbrMax] = useState(1)
    const [evoChain, setEvoChain] = useState({})
    const [check, setCheck] = useState(false)

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
                tmp.to = await Promise.all(array[0].evolves_to.map(async evolution => {
                    let test = await fetchEvolutions([evolution])
                    return test
                }))
                return tmp
            } else {
                setNbrMax(prevNbrMax => prevNbrMax + 1)
                let tmp = await fetchInfos(array[0].species.name)
                return tmp
            }
        }

        async function apiCall() {
            const response = await axios.get(`${currentPokemon.evolution_chain}`)
            setNbrMax(1)
            setEvoChain(await fetchEvolutions([response.data.chain]))
            setCheck(!check)
        }
        if (Object.keys(currentPokemon).length !== 0) {
            if (check === false) {
                apiCall()

            }
        }
    }, [currentPokemon, evoChain])

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
                            <img src={evoChain.image} alt="img" />
                        </figure>
                        <div className='containerevolution__mainboxcard__cardevo1__evo__desc'>
                            <div className='containerevolution__mainboxcard__cardevo1__evo__desc__name'>
                                <h5>{translateName(evoChain.pokemonName)}</h5>
                                <p><span>#{evoChain.id < 100 ? addZero(evoChain.id) : evoChain.id}</span></p>
                            </div>
                            <div className='containerevolution__mainboxcard__cardevo1__evo__desc__type'>
                                <div className='containerevolution__mainboxcard__cardevo1__evo__desc__type__abilities'>
                                    <span className={`pill ${translateType(evoChain.type1)}`}>{translateType(evoChain.type1)}</span>
                                </div>
                                <div className='containerevolution__mainboxcard__cardevo1__evo__desc__type__abilities'>
                                    <span className={`pill ${translateType(evoChain.type2)}`}>{translateType(evoChain.type2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerevolution__mainboxcard__chevron1'>&#62;</div>
                {nbrMax > 4 &&
                    <div className='containerevolution__mainboxcard__cardevo2'>
                        {
                            evoChain.to !== undefined &&
                            evoChain.to.length > 0 &&
                            evoChain.to.map(evolutions => {
                                return (
                                    <div key={evolutions.id}>

                                        <div className='containerevolution__mainboxcard__cardevo2__evo'>
                                            <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax > 3 ? '__max' : ''}`}>
                                                <img src={evolutions.image} alt="img" />
                                            </figure>
                                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                                                <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax > 3 ? '__max' : ''}`}>
                                                    <h5>{translateName(evolutions.pokemonName)}</h5>
                                                    <p><span>#{evolutions.id < 100 ? addZero(evolutions.id) : evolutions.id}</span></p>
                                                </div>
                                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                                    <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                        <span className={`pill ${translateType(evolutions.type1)}`}>{translateType(evolutions.type1)}</span>
                                                    </div>
                                                    <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                        <span className={`pill ${translateType(evolutions.type2)}`}>{translateType(evolutions.type2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                        {evolutions.to.length !== 0 &&
                                            <div className='containerevolution__mainboxcard__chevron1'>&#62;</div>}
                                        {evolutions.to.length > 0 &&
                                            evolutions.to.map(evolution => {
                                                return (
                                                    // <div className='containerevolution__mainboxcard__cardevo2'>
                                                    <div key={evolution.id} className='containerevolution__mainboxcard__cardevo2__evo'>
                                                        <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax > 3 ? '__max' : ''}`}>
                                                            <img src={evolution.image} alt="img" />
                                                        </figure>
                                                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                                                            <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax > 3 ? '__max' : ''}`}>
                                                                <h5>{translateName(evolution.pokemonName)}</h5>
                                                                <p><span>#{evolution.id < 100 ? addZero(evolution.id) : evolution.id}</span></p>
                                                            </div>
                                                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                                    <span className={`pill ${translateType(evolution.type1)}`}>{translateType(evolution.type1)}</span>
                                                                </div>
                                                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                                    <span className={`pill ${translateType(evolution.type2)}`}>{translateType(evolution.type2)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                    </div>
                                )
                            })
                        }
                    </div>
                }
                {
                    nbrMax <= 4 &&
                    evoChain.to !== undefined &&
                    evoChain.to.length > 0 &&
                    evoChain.to.map(evolutions => {
                        return (
                            <div key={evolutions.id}>
                                <div className='containerevolution__mainboxcard__cardevo2'>
                                    <div className='containerevolution__mainboxcard__cardevo2__evo'>
                                        <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax > 3 ? '__max' : ''}`}>
                                            <img src={evolutions.image} alt="img" />
                                        </figure>
                                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                                            <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax > 3 ? '__max' : ''}`}>
                                                <h5>{translateName(evolutions.pokemonName)}</h5>
                                                <p><span>#{evolutions.id < 100 ? addZero(evolutions.id) : evolutions.id}</span></p>
                                            </div>
                                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                    <span className={`pill ${translateType(evolutions.type1)}`}>{translateType(evolutions.type1)}</span>
                                                </div>
                                                <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                    <span className={`pill ${translateType(evolutions.type2)}`}>{translateType(evolutions.type2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    {evolutions.to.length !== 0 && <div className='containerevolution__mainboxcard__chevron1'>&#62;</div>}
                                    {evolutions.to.length > 0 &&
                                        evolutions.to.map(evolution => {
                                            return (
                                                // <div className='containerevolution__mainboxcard__cardevo2'>
                                                <div key={evolution.id} className='containerevolution__mainboxcard__cardevo2__evo'>
                                                    <figure className={`containerevolution__mainboxcard__cardevo2__evo__picture${nbrMax > 3 ? '__max' : ''}`}>
                                                        <img src={evolution.image} alt="img" />
                                                    </figure>
                                                    <div className='containerevolution__mainboxcard__cardevo2__evo__desc'>
                                                        <div className={`containerevolution__mainboxcard__cardevo2__evo__desc__name${nbrMax > 3 ? '__max' : ''}`}>
                                                            <h5>{translateName(evolution.pokemonName)}</h5>
                                                            <p><span>#{evolution.id < 100 ? addZero(evolution.id) : evolution.id}</span></p>
                                                        </div>
                                                        <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type'>
                                                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                                <span className={`pill ${translateType(evolution.type1)}`}>{translateType(evolution.type1)}</span>
                                                            </div>
                                                            <div className='containerevolution__mainboxcard__cardevo2__evo__desc__type__abilities'>
                                                                <span className={`pill ${translateType(evolution.type2)}`}>{translateType(evolution.type2)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            )
                })
                }
            </div>
        </div >

    );
};

export default Evolutions;