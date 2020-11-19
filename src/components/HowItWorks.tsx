import React, { useEffect, useState } from 'react';

import Bar from './Bar'

import '../styles/components/howitworks.css';
import api from '../services/api';

interface HIWInterface {
    id: number,
    active: boolean,
    buttons: [
        {
            id: number,
            title: string,
            text: string,
            active: boolean,
        }
    ]
}

function HowItWorks() {
    const [hiw, setHiw] = useState<HIWInterface[]>([])
    const active = hiw.filter(h => h.active === true)

    async function loadHIW() {
        const response = await api.get('howitworks');
        setHiw(response.data)
    }

    useEffect(() => {
        loadHIW()
    },[])

    return (
        <div id="how-it-works">
            <h1>COMO FUNCIONA?</h1>
            <Bar />
            {active.map && active.map(howItWork => {
                return(
                <div className="cards" key={howItWork.id}>
                    {howItWork.buttons.map(btn => {
                        return (
                            <div className="card" key={btn.id}>
                                <h2>{btn.title}</h2>
                                <p>{btn.text}</p>
                            </div>
                        )
                    })}
                </div>
                )
            })}
        </div>
    );
}

export default HowItWorks;

