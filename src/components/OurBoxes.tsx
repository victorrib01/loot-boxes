import React from 'react';

import Bar from './Bar'

import '../styles/components/ourboxes.css';

function OurBoxes() {
    return (
        <div id="our-vloots">
            <div className="vloots-menu">
                {/* <div className="republicanos">
                    <button>REPUBLICANOS</button>
                </div>
                <div className="anarco">
                    <button>ANARCO</button>
                </div> */}
                <div className="text-ourvloots">
                    <h1>NOSSOS</h1>
                    <Bar />
                    <h1>VLOOTS</h1>
                </div>
                {/* <div className="liberal">
                    <button>LIBERAL</button>
                </div>
                <div className="comunista">
                    <button>COMUNISTA</button>
                </div> */}
            </div>
        </div>
    );
}

export default OurBoxes;
