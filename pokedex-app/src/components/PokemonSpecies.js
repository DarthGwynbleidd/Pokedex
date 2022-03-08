import React, { useContext, useState } from 'react';
import PokemonStats from './PokemonStats';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import abilitiesTranslate from '../jsonfiles/abilities_translate.json'
import CurrentPokemonContext from '../contexts/CurrentPokemonContext';

const PokemonSpecies = () => {

    const { currentPokemon } = useContext(CurrentPokemonContext)
    const [count, setCount] = useState(0)
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
        for (let ability in abilitiesTranslate) {
            if (abilitiesTranslate[ability].toLowerCase() === abilityName)
                vfAbility = ability
        }
        return vfAbility
    }
    let lengthFlavor = ''
    if (currentPokemon.flavor !== undefined)
        lengthFlavor = currentPokemon.flavor.length
    const prevText = () => {
        if (currentPokemon.flavor !== undefined) {
            if (count > 0)
                setCount(prevCount => prevCount - 1)
        }
    }

    const nextText = () => {
        if (currentPokemon.flavor !== undefined) {
            if (count < lengthFlavor)
                setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div className='pokemon'>
            <div className='pokemon__left'>
                <div className='pokemon__left__img'>
                    <img src={currentPokemon.image} alt={translateName(currentPokemon.pokemonName)} />
                </div>
                <div className='pokemon__left__stat' >
                    <PokemonStats />
                </div>
            </div>
            <div className='pokemon__species'>
                {currentPokemon.flavor !== undefined ? <p className='pokemon__species__anotation'/*flavor_text*/>{currentPokemon.flavor[count]}</p> : ""}
                <p className='pokemon__species__anotation__img'>
                    <img onClick={prevText} src='./assets/chevrons/chevron-precedent.png' alt='description précédent' />
                    <span> {count + 1}/{lengthFlavor} </span>
                    <img onClick={nextText} src='./assets/chevrons/chevron-suivant.png' alt='description suivant' />
                </p>
                <div className='pokemon__species__mensuration'>
                    <div className='pokemon__species__mensuration__left'>
                        <h4>Taille</h4>
                        <p /*heigth API en decimetre*/>{currentPokemon.height / 10}m</p>
                        <h4>Poids</h4>
                        <p /*weigth en decigramme*/>{currentPokemon.weight / 10}kg </p>

                    </div>
                    <div className='pokemon__species__mensuration__rigth'>
                        {currentPokemon.abilities !== undefined ? <h4>{currentPokemon.abilities.length > 1 ? "Talents" : "Talent"}</h4> : ""}
                        {currentPokemon.abilities !== undefined && currentPokemon.abilities.map((ability, index) => {
                            return <p key={index}>{translateAbilities(ability)}</p>
                        })}

                    </div>
                </div>
                <div className='pokemon__species__types'>
                    <h3>Types</h3>
                    <div className='pokemon__species__types__abilities'>
                        <span className={`pill ${translateType(currentPokemon.type1)}`}>{translateType(currentPokemon.type1)}</span>
                    </div>
                    <div className='pokemon__species__types__abilities'>
                        <span className={`pill ${translateType(currentPokemon.type2)}`}>{translateType(currentPokemon.type2)}</span>
                    </div>
                </div>

                {<div className='pokemon__species__weaknesses'>
                    <h3>Faiblesses</h3>
                    {currentPokemon.weaknesses !== undefined && currentPokemon.weaknesses.map((weak, index) => {
                        return <div className='pokemon__species__type'>
                            <span key={index} className={`pill ${translateType(weak)}`}>{translateType(weak)}</span>
                        </div>
                    })}
                </div>}
            </div>
        </div>
    );
};

export default PokemonSpecies;