//need to figure out how to incorporate App.js with my html/ src folder

import React, { Component } from 'react';
import '../style.css'
import HexagonComponent from '../hexagons';
import beeImage from './Pictures/rainbow bee.jpeg';


function App() {
    return (
        <div>
            <div id="background"></div>
            <div id="explore-button"> {/*add an invisible button in front of picture to simulate button activity*/}
                <img src={beeImage} alt="Explore" style={{ width: '100px' }} />
            </div>

            <div className="profile-container">
                <div className="profile-comb"></div>
            </div>

            <HexagonComponent />
        </div>
    );
}

export default App;