import React from 'react';

import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import '../styles/components/footer.css';

function Footer() {
    const footerData = {
        logo: '../images/bigLogo.svg'
    }
    return (
        <footer>
            <div className="footer-content">
                <div className='menu-footer'>
                    <a href="#carousel">Escolha seu Loot Box</a>
                    <a href="#how-it-works">Como funciona?</a>
                    <a href="#what-is">O que são?</a>
                </div>
                <div className='social-medias'>
                    <button>
                        <FaFacebook size={50} />
                    </button>
                    <button>
                        <FaInstagram size={50} />
                    </button>
                    <button>
                        <FaTwitter size={50} />
                    </button>
                </div>
                <div className='logo-footer'>
                    <a href="#menu">
                        <img src={footerData.logo} alt="bigLogo" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
