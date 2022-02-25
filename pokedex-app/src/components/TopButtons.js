import React from 'react';

import RandomSelect from './RandomSelect';

import SearchBar from './SearchBar';

const TopButtons = () => {
    return (

        <div className='buttons' id='buttons'>
            <SearchBar />
            <RandomSelect />
        </div>  


    );
};

export default TopButtons;