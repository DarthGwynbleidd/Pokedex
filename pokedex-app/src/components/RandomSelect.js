import React from 'react';

const RandomSelect = () => {
    
    return (
        <div className='randomSelect'>
            
            <button className='randomSelect__button'><img src="./assets/top-buttons/random-logo.png" alt='random'/><span className='randomSelect__button__p'>Surprise</span></button>
            <div className='randomSelect__wrapper'>
            <img className='randomSelect__wrapper__pokeball' src='./assets/top-buttons/select-logo.png' alt='pokeball'/>
            <select className='randomSelect__wrapper__select'>    

                <option value="search by number">Tri par ordre croissant</option>
                <option value="search by number">Tri par ordre décroissant</option>
                <option value="search by A-Z">Tri de A-Z</option>
                <option value="search by Z-A">Tri de Z-A</option>
        
            </select>

            </div>
        </div>
    );
};

export default RandomSelect;