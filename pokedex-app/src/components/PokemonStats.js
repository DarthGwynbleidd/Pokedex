import React, { useContext } from 'react';
import CurrentPokemonContext from '../contexts/CurrentPokemonContext';


const PokemonStats = () => {

    const { currentPokemon } = useContext(CurrentPokemonContext)

    const pvHeight = Math.round(currentPokemon.hp / 22) * (100 / 15) + '%';
    const attHeight = Math.round(currentPokemon.attack / 22) * (100 / 15) + '%';
    const defHeight = Math.round(currentPokemon.defense / 22) * (100 / 15) + '%';
    const attSpecHeight = Math.round(currentPokemon.specialAttack / 22) * (100 / 15) + '%';
    const defSpecHeight = Math.round(currentPokemon.specialDefense / 22) * (100 / 15) + '%';
    const speedHeight = Math.round(currentPokemon.speed / 22) * (100 / 15) + '%';

    return (
        <div className='PokemonStats'>
            <div className='PokemonStats__fond'><h4>Stats de base</h4>
                <div className='PokemonStats__fond__barreVide'>
                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__pv'>
                            <div className='PokemonStats__fond__barreVide__col__pv__blue' style={{ '--col-pv': pvHeight }}></div>
                            <div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div><div className='PokemonStats__fond__barreVide__col__pv__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>PV</div>
                    </div>
                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__attaque'>
                            <div className='PokemonStats__fond__barreVide__col__attaque__blue' style={{ '--col-att': attHeight }}></div>
                            <div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div><div className='PokemonStats__fond__barreVide__col__attaque__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>Attaque</div>
                    </div>
                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__defense'>
                            <div className='PokemonStats__fond__barreVide__col__defense__blue' style={{ '--col-def': defHeight }}></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>Défense</div>
                    </div>

                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale' style={{ '--col-attSpec': attSpecHeight }}>
                            <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__blue'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__attaqueSpeciale__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>Attaque péciale</div>
                    </div>
                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__defenseSpeciale' style={{ '--col-defSpec': defSpecHeight }}>
                            <div className='PokemonStats__fond__barreVide__col__defenseSpeciale__blue'></div>
                            <div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div><div className='PokemonStats__fond__barreVide__col__defenseSpeciale__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>Défense Spéciale</div>
                    </div>
                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__vitesse'>
                            <div className='PokemonStats__fond__barreVide__col__vitesse__blue' style={{ '--col-speed': speedHeight }}></div>
                            <div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div><div className='PokemonStats__fond__barreVide__col__vitesse__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>Vitesse</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonStats;