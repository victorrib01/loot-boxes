import React from 'react';

import WhatAre from '../components/WhatAre';
import HowItWorks from '../components/HowItWorks';
import Carousel from '../components/Carousel';
import OurBoxes from '../components/OurBoxes';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/pages/home.css';
import Boxes from '../components/Boxes';

function Home() {
    return (
        <>
            <Header />
            <div className='main-container'>
                <main>
                    <Carousel />
                    <OurBoxes />
                    <Boxes />
                    <WhatAre />
                    <HowItWorks />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Home;
