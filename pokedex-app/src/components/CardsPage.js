import React from 'react';
import AdvancedResearch from './AdvancedResearch';
import TopButtons from './TopButtons';
import Grid from './Grid';
import BottomButton from './BottomButton';

const CardsPage = () => {
    return (
        <div className='cardsPage'>
           <AdvancedResearch />
           <TopButtons />
           <Grid />
           <BottomButton />
        </div>
    );
};

export default CardsPage;