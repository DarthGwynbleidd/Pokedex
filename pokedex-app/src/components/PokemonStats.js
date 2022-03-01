import React from 'react';
/* La hauteur du bleu = around( valeur / 15) et * 11 */


const PokemonStats = () => {
    const colHeight = (150 / 15) * 11 + 'px';
    console.log(colHeight);
    return (
        <div className='PokemonStats'>
            <div className='PokemonStats__fond'>
                <div className='PokemonStats__fond__barreVide'>
                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__pv'>
                            <div className='PokemonStats__fond__barreVide__col__pv__blue' style={{Height: {colHeight}}}></div>
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
                            <div className='PokemonStats__fond__barreVide__col__attaque__blue'></div>
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
                            <div className='PokemonStats__fond__barreVide__col__defense__blue'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                            <div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div><div className='PokemonStats__fond__barreVide__col__defense__1'></div>
                        </div>
                        <div className='PokemonStats__fond__barreVide__col__pv__legende'>Défense</div>
                    </div>

                    <div className='PokemonStats__fond__barreVide__col'>
                        <div className='PokemonStats__fond__barreVide__col__attaqueSpeciale'>
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
                        <div className='PokemonStats__fond__barreVide__col__defenseSpeciale'>
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
                            <div className='PokemonStats__fond__barreVide__col__vitesse__blue'></div>
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