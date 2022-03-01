import React from 'react';
/* La hauteur du bleu = around( valeur / 15) et * 11 */


const PokemonStats = () => {
    const pvHeight = (150 / 15) * 11 + 'px';
    const attHeight = (50 / 15) * 11 + 'px';
    const defHeight = (15 / 15) * 11 + 'px';
    const attSpecHeight = (80 / 15) * 11 + 'px';
    const defSpecHeight = (34 / 15) * 11 + 'px';
    const speedHeight = (64 / 15) * 11 + 'px';
     
    return (
        <div className='PokemonStats'>
            <div className='PokemonStats__fond'><h4>Stats de base</h4>
                <div className='PokemonStats__fond__barreVide'>
                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__pv'>
                            <div className='PokemonStats__fond__barreVide__col__pv__blue' style={{'--col-pv': pvHeight}}></div>
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
                            <div className='PokemonStats__fond__barreVide__col__attaque__blue' style={{'--col-att': attHeight}}></div>
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
                            <div className='PokemonStats__fond__barreVide__col__defense__blue' style={{'--col-def': defHeight}}></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>Défense</div>
                    </div>

                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale' style={{'--col-attSpec': attSpecHeight}}>
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
                        <div className='PokemonStats__fond__barreVide__col__defenseSpeciale' style={{'--col-defSpec': defSpecHeight}}>
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
                            <div className='PokemonStats__fond__barreVide__col__vitesse__blue' style={{'--col-speed': speedHeight}}></div>
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