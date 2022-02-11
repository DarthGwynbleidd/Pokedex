import React from 'react';
import TopButtons from './TopButtons';

const CardsPage = () => {
    return (
        <div>
           <div className='borderTop'>
              <div className='borderTop-left'></div>
              <div className='borderTop-center'></div>
              <div className='borderTop-right'></div>
           </div>
           <TopButtons />
        </div>
    );
};

export default CardsPage;