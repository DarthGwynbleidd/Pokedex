import React from 'react';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input className='search' type="text" placeholder='Nom ou numéro'></input>
            <div onClick={() => { }} className='searchbutton'>
                <img className='imgloupe' src="./assets/cards-page/icon.png" alt="pics" />
            </div>
        </div >
    );
};

export default SearchBar;