import React from 'react';
import AdvancedResearch from './AdvancedResearch';
import TopButtons from './TopButtons';
import Grid from './Grid';
import Bottom_button from './Bottom_button';

const CardsPage = () => {
    return (
        <div className='cardsPage'>
           <AdvancedResearch />
           <TopButtons />
           <Grid />
           <Bottom_button />
        </div>
    );
};

export default CardsPage;