import React, { useState } from 'react';

const RandomSelect = () => {
    const [isLabelClick,setIsLabelClick]= useState(false)
    return (
        <div className='randomSelect'>
            
            <button className='randomSelect__button'><img src="./assets/top-buttons/random-logo.png" alt='random'/><span className='randomSelect__button__p'>Surprise</span></button>
            
            <select className='randomSelect__select'>    

                <option value="search by number">Tri par ordre croissant</option>
                <option value="search by number">Tri par ordre décroissant</option>
                <option value="search by A-Z">Tri par ordre alphabétique</option>
                <option value="search by Z-A">Tri de Z-A</option>
        
            </select>
            <div className='randomSelect__label' tabIndex={0} >
                <label>Tri par ordre croissant</label>
            </div>
        </div>
    );
};

export default RandomSelect;