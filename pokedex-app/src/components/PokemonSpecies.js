import React from 'react';
import PokemonStats from './PokemonStats';
// import typeTranslate from '../jsonfiles/type_translate.json'
// import nameTranslate from '../jsonfiles/pokemon_translate.json'

const PokemonSpecies = () => {
    return (
        <div className='pokemon'>
            <div className='pokemon__left'>
                <div className='pokemon__left__img'>
                    <img src='/assets/bulbizarre.png' alt='bulbizar' />
                </div>
                <div className='pokemon__left__stat' >
                <PokemonStats />
                </div>
            </div>
            <div className='pokemon__species'>
                <p className='pokemon__species__anotation'/*flavor_text*/>Il y a une graine de plante sur son dos dès la naissance de ce Pokémon. La graine grossit lentement.</p>
                <div className='pokemon__species__mensuration'>
                    <div className='pokemon__species__mensuration__left'>
                        <h4>Taille</h4>
                        <p /*heigth API en decimetre*/>0.4m</p>
                        <h4>Poids</h4>
                        <p /*weigth en decigramme*/>6.00kg </p>
                        <h4>Genre</h4>
                        <img /*symbole ?*/ src='./assets/pokemon-page/female_1.png' alt='symbole female' />
                        <img src='/assets/pokemon-page/male_1.png' alt='symbole male' />
                    </div>
                    <div className='pokemon__species__mensuration__rigth'>
                        <h4>Catégories</h4>
                        <p> souris</p>
                        <h4>Talent</h4>
                        <p>Statik</p>
                    </div>
                </div>
                <div className='pokemon__species__types'>
                    <h3>Types</h3>
                    <div className='pokemon__species__types__abilities'>
                        <span className='type plante'>Plante</span>
                    </div>
                    <div className='pokemon__species__types__abilities'>
                        <span className='type glace'>Poison</span>
                    </div>
                </div>

                <div className='pokemon__species__weaknesses'>
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


                </div>
            </div>
        </div>
    );
};

export default PokemonSpecies;