import React from 'react';
// import { Link } from 'react-router-dom'
import Logo from './Logo';

import '../styles/components/header.css';

function Header() {
    return (
        <header>
            <Logo />
            <div id="menu" className="menu">
                <a href="#carousel">Escolha seu Loot Box</a>
                <a href="#how-it-works">Como funciona?</a>
                <a href="#what-is">O que são?</a>
            </div>
        </header>
    );
}

export default Header;
