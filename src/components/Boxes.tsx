import React, { useEffect, useState } from 'react';

import '../styles/components/boxes.css';
import '../styles/components/modalbox.css'

import Modal from './Modal';
import api from '../services/api';

interface BoxesInterface {
    id: number
    active: boolean;
    name: string;
    description: string;
    price: number;
    banner:{
        id: number,
        name: string,
        url: string
    },
    box_image: {
        id: number,
        name: string,
        url: string,
    }
    boxbuttons:[
        {
            id: number,
            title: string,
            active: boolean,
            image: {
                id: number,
                name: string,
                url: string
            }
        }
    ]
}


function Boxes() {
    const [showModal, setShow] = useState(-1);
    const [box, setBox] = useState<BoxesInterface[]>([]);
    const active = box.filter( b => b.active === true)
    const placeholder = 'https://via.placeholder.com/200.png'

    async function loadBoxes(){
        const response = await api.get('boxes');
        setBox(response.data)
    }

    useEffect(()=>{
        loadBoxes()
    },[])

    return (
        <div className="boxes">
            {active.map(boxes => {
                return (
                    <div className="box" key={boxes.id}>
                        <h2>{boxes.name}</h2>
                        <img src={`http://0.0.0.0:1337${boxes.box_image.url}`|| placeholder} alt={boxes.name} />
                        <button onClick={(e) => setShow(boxes.id)}>VER MAIS</button>
                        <Modal onClose={(e: any) => setShow(-1)} active={showModal} id={boxes.id}>
                            <div className="box-details">
                                <h1>Loot Box {boxes.name}</h1>
                                <img src={`http://0.0.0.0:1337${boxes.box_image.url}` || placeholder} alt="box" />
                                <h2>Descrição</h2>
                                <p>
                                {boxes.description}
                                </p>
                                <h1 id='price'>R$ {(boxes.price/100).toFixed(2)}</h1>
                                <button>ASSINAR</button>
                            </div>
                        </Modal>
                    </div>
                )
            })}
        </div>
    );
}

export default Boxes;

