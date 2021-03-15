import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/components/logo.css';

function Logo() {
    const logoData =
    {
        image: '../images/logo.svg'
    }

    return (
        <Link to="/" className="logo">
            <img src={logoData.image} alt="logo" />
            <h1>LootBoxes</h1>
        </Link>
    );
}

export default Logo;
