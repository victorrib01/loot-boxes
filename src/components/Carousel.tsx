import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import api from '../services/api';

import '../styles/components/carousel.css';

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

function Carousel() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 15000,
    }

    const [box, setBox] = useState<BoxesInterface[]>([]);
    const active = box.filter(b => b.active === true);
    const bannerPlaceholder = 'https://via.placeholder.com/1280x300.png'
    const buttonPlaceholder = 'https://via.placeholder.com/150.png'

    async function loadCarousel(){
        const response = await api.get('boxes');
        setBox(response.data)
    }

    useEffect(()=>{
        loadCarousel()
    },[])

    return (
        <div id="slider">
            <Slider {...settings}>
                {active.map(carousel => {
                    return (
                        <div id="carousel" key={carousel.id} >
                            <h1>Loot Box {carousel.name}</h1>
                            <div className="buttons">
                                {carousel.boxbuttons&&carousel.boxbuttons.map(button => {
                                    return (
                                        <div className="button" key={button.id}>
                                            <button>
                                                <img src={`http://0.0.0.0:1337${button.image.url}`||buttonPlaceholder} alt={`button-${button.title}`} />
                                            </button>
                                            <h2>{button.title}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="banner">
                                <img src={`http://0.0.0.0:1337${carousel.banner.url}`|| bannerPlaceholder} alt={carousel.name} />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default Carousel;
