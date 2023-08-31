//need to figure out how to incorporate App.js with my html/ src folder
import React from 'react';
import '../style.css';
import HexagonComponent from '../hexagons.js';
import beeImage from './Pictures/rainbow bee.jpeg';
import ProfileContainer from '../../Stretch/Profile.js';
import IncrementFriend from '/Stretch/friendFeed.js';

//{/* STRETCH: add an invisible button in front of picture to simulate button activity*/}
function App() {
    return (
        <div>
            <div id="background"></div>
            <div id="explore-button">
                <img src={beeImage} alt="Explore" style={{ width: '125px' }} />
            </div>

            <div className="profile-container">
                <div className="profile-comb"></div>
            </div>
            <HexagonComponent />
            <ProfileContainer />
            <IncrementFriend />
        </div>
    );
}

export default App;