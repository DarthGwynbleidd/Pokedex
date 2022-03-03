import React from 'react';
import PokemonStats from './PokemonStats';
import typeTranslate from '../jsonfiles/type_translate.json'
import nameTranslate from '../jsonfiles/pokemon_translate.json'
import abilitiesTranslate from '../jsonfiles/abilities_translate.json'

const PokemonSpecies = (props) => {
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
        <div className='pokemon'>
            <div className='pokemon__left'>
                <div className='pokemon__left__img'>
                    <img src={props.image} alt={translateName(props.pokemonName)} />
                </div>
                <div className='pokemon__left__stat' >
                    <PokemonStats stats={props.stats} />
                </div>
            </div>
            <div className='pokemon__species'>
                <p className='pokemon__species__anotation'/*flavor_text*/>{props.flavor}</p>
                <div className='pokemon__species__mensuration'>
                    <div className='pokemon__species__mensuration__left'>
                        <h4>Taille</h4>
                        <p /*heigth API en decimetre*/>{props.height / 10}m</p>
                        <h4>Poids</h4>
                        <p /*weigth en decigramme*/>{props.weight / 10}kg </p>

                    </div>
                    <div className='pokemon__species__mensuration__rigth'>
                        <h4>Talent(s)</h4>
                        <p>{translateAbilities(props.ability1)}</p>
                        <p>{translateAbilities(props.ability2)}</p>
                    </div>
                </div>
                <div className='pokemon__species__types'>
                    <h3>Types</h3>
                    <div className='pokemon__species__types__abilities'>
                        <span className={`type ${translateType(props.type1)}`}>{translateType(props.type1)}</span>
                    </div>
                    <div className='pokemon__species__types__abilities'>
                        <span className={`type ${translateType(props.type2)}`}>{translateType(props.type2)}</span>
                    </div>
                </div>

                {/* <div className='pokemon__species__weaknesses'>
                    <h3>Faiblesses</h3>
                    <div className='pokemon__species__weaknesses__type'>
                        <span className='weakness feu'>Feu</span>
                    </div>

                    <div className='pokemon__species__weaknesses__type'>
                        <span className='weakness vol'>Vol</span>
                    </div>
                    <div className='pokemon__species__weaknesses__type'>
                        <span className='weakness glace'>Glace</span>
                    </div>

                    <div className='pokemon__species__weaknesses__type'>
                        <span className='weakness psy'>Psy</span>
                    </div>


                </div> */}
            </div>
        </div>
    );
};

export default PokemonSpecies;