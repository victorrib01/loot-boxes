import React, { useEffect, useState } from 'react';

import '../styles/components/whatare.css';

import api from '../services/api'
import Bar from './Bar'

interface WhatAreInterface{
    id: number;
    text: string;
    active: boolean;
}

function WhatAre() {
    const [whatAre, setWhatAre] = useState<WhatAreInterface[]>([]);

    const active = whatAre.filter(wa => wa.active === true);

    async function loadWhatAre() {
        const response = await api.get('whatare');
        setWhatAre(response.data)
    }

    useEffect(() => {
        loadWhatAre()
    })
    
    return (
        <div id="what-are">
            <h1>O QUE SÃO?</h1>
            <Bar />
        <p>{active.map(ac=>{
            return ac.text
        })}</p>
        </div>
    );
}

export default WhatAre;
