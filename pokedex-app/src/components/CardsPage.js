import React from 'react';
import Grid from './Grid';

import TopButtons from './TopButtons';

const CardsPage = () => {
    return (
        <div className='cardsPage'>
           <div className='borderTop'>
              <div className='borderTop-left'></div>
              <div className='borderTop-center'></div>
              <div className='borderTop-right'></div>
           </div>
           <TopButtons />
           <Grid />
        </div>
    );
};

export default CardsPage;