import React, { useState } from 'react';
import Card from './Card';


const Grid = () => {
    const [obj, setObj] = useState([{
        image: './assets/pikachu.png',
        name: 'Pikachu',
        number: '025',
        type1: 'electrik',
        type2: ''
    },
    {
        image: './assets/herbizarre.png',
        name: 'Herbizarre',
        number: '002',
        type1: 'plante',
        type2: ''
    },
    {
        image: './assets/94.png',
        name: 'Ectoplasma',
        number: '094',
        type1: 'spectre',
        type2: 'poison'
    },
    {
        image: './assets/485.png',
        name: 'Heatran',
        number: '485',
        type1: 'feu',
        type2: 'acier'
    },
    {
        image: './assets/668.png',
        name: 'Nemelios',
        number: '668',
        type1: 'feu',
        type2: 'normal'
    },
    {
        image: './assets/18.png',
        name: 'Roucarnage',
        number: '018',
        type1: 'normal',
        type2: 'vol'
    }])
    console.log(obj);
    return (
        <div className='grid'>
            <Card {...obj[0]} />
            <Card {...obj[1]} />
            <Card {...obj[2]} />
            <Card {...obj[3]} />
            <Card {...obj[4]} />
            <Card {...obj[5]} />
        </div>
    );
};

export default Grid;