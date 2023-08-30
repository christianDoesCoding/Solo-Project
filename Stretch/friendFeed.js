//STRETCH

import React, { useState, useEffect } from 'react';
import { color } from 'd3';
import HexagonComponent from '../src/hexagons';
//doesn't need to pull from HexagonComponent. Instead, this file needs its own hexagon-rendering logic
    //at same time, need to figure out how to object-destructure the midColors array from hexagons.js



//logic where friend's profile colors run across bottom of screen
    //increments randomly between 1-5 seconds
const cohortObj = {
    Anile_K: 'Anile K.', 
    Adrian_Z: 'Adrian Zywno', 
    Alec_D: 'Alec Derritt', 
    Alexandra_A: 'Alexandra Ashcraft', 
    Amanda_P: 'Amanda Pagan', 
    Anna_K: 'Anna Koehnk',
    Annabelle_N: 'Annabelle Ni', 
    Anthony_V: 'Anthony Vuong', 
    Arianna_D: 'Arianna Dahli', 
    Ayden_Y: 'Ayden Yip', 
    Billy_M: 'Billy Murphy', 
    Brandon_G: 'Brandon Gregoire', 
    Bryan_C: 'Bryan Choe', 
    Caheri_A: 'Caheri Aguilar', 
    Chris_S: 'Chris Suzukida', 
    Christian_A: 'Christian Ashley', 
    Christian_L: 'Christian Lyon', 
    Christian_R: 'Christian Robinson', 
    Clayton_S: 'Clayton Stewart', 
    Christian_M: 'Christian Morales', 
    Daniel_K: 'Daniel Kim', 
    David_Y: 'David Yoon', 
    Derek_K: 'Derek Koh', 
    Eddy_K: 'Eddy Kagia', 
    Edwin_L: 'Edwin Leong', 
    Eisha_K: 'Eisha Kaushal', 
    Gayle_M: 'Gayle Martin', 
    Grant_S: 'Grant Schussler', 
    Halia_H: 'Halia Haynes', 
    Haoyu_L: 'Haoyu Liu', 
    Ivy_S: 'Ivy Shmikler', 
    Jacob_M: 'Jacob Melendez', 
    Jacob_S: 'Jacob Sasser', 
    Jason_P: 'Jason Pennini', 
    Jeremiah_H: 'Jeremiah Hogue',
    Jordan_G: 'Jordan Grubb',
    Josh_N: 'Josh Nelson',
    Justin_C: 'Justin Chu',
    Katrina_V: 'Katrina Villanueva',
    Kenny_K: 'Kenny Kim',
    Kevin_L: 'Kevin Li',
    Kristin_T: 'Kristin Tillotson',
    Kyle_N: 'Kyle Nguyen',
    Leona_T: 'Leona Thompson',
    Max_W: 'Max Weiner',
    Megan_K: 'Megan Kabat',
    Melida_B: 'Melida Bueno',
    Meredith_FB: 'Mereith Frazier Britt',
    Michael_V: 'Michael Van',
    Moiz_R: 'Moiz Rauf',
    M_Thomp: 'MThomp@____.com',
    Myla_A: 'Myla A',
    Nate_D: 'Nate Doucette',
    Nitesh_M: 'Nitesh Manem',
    Peter_Z: 'Peter Zepf',
    Preston_M: 'Preston Mounivong',
    Quinn_C: 'Quinn Craddock',
    Rachel_P: 'Rachel Power',
    Rylie_P: 'Rylie P',
    Sam_L: 'Same Lee',
    Samantha_S: 'Samantha Santamaria',
    Scott_H: 'Scott Hallock',
    Sid_S: 'Sid Saxena',
    Stacey_L: 'Stacey Lee',
    Stephen_A: 'Stephen Acosta',
    Steve_S: 'Steve Schlepphorst',
    Tommy_H: 'Tommy Huynh',
    Tony_G: 'Tony Gao',
    Tristan_Ke: 'Tristian Keester',
    Tristian_Kr: 'Tristian Krause',
    Tyler_C: 'Tyler Coryell',
    Wade_C: 'Wade Chadwick',
    Wesley_P: 'Wesley Phipps'
};


//let shortenedNames = Object.keys(cohortObj).map(element => element.replace('_',' ') + '.');
let randomInc = () => 4000 + Math.floor(Math.random()*4000); //going too fast?
//let cohortNum = Math.floor(Math.random()*76);//possibly move back into for loop. perhaps too much memory in global?
//let colorNum = Math.floor(Math.random()*68);

//later time... import from hexagons.js instead of redeclaring
const colors = [
    '#ff3333',
    '#ff1500',
    '#ff2b00',
    '#ff4000',
    '#ff5500',
    '#ff6a00',
    '#ff8000',
    '#ff9500',
    '#ffaa00',
    '#ffbf00',
    '#ffd500',
    '#ffea00',
    '#ffff00',
    '#eaff00',
    '#d4ff00',
    '#bfff00',
    '#aaff00',
    '#95ff00',
    '#80ff00',
    '#55ff00',
    '#40ff00',
    '#2bff00',
    '#15ff00',
    '#00ff00',
    '#00ff15',
    '#00ff2b',
    '#00ff40',
    '#00ff55',
    '#00ff6a',
    '#00ff80',
    '#00ff95',
    '#00ffaa',
    '#00ffbf',
    '#00ffd5',
    '#00ffea',
    '#00ffff',
    '#00eaff',
    '#00d4ff',
    '#00bfff',
    '#00aaff',
    '#0095ff',
    '#007fff',
    '#006aff',
    '#0055ff',
    '#0040ff',
    '#002bff',
    '#0015ff',
    '#0000ff',
    '#1500ff',
    '#2a00ff',
    '#4000ff',
    '#5500ff',
    '#6a00ff',
    '#7f00ff',
    '#9500ff',
    '#aa00ff',
    '#bf00ff',
    '#d400ff',
    '#ea00ff',
    '#ff00ff',
    '#ff00ea',
    '#ff00d4',
    '#ff00bf',
    '#ff00aa',
    '#ff0095',
    '#ff0080',
    '#ff006a',
    '#ff0055',
    '#ff0040',
    '#ff002b',
    '#ff0015',
'#ff0000']// color options

/*
const IncrementFriends = () => {
    for (const keys in cohortObj) {//add random color and profile hexagon property to each profile //profile color will be same color
        cohortObj[keys].proColor = colors[num];
    }
    return (
        <div>
            {Object.keys(cohortObj).map(key => (
                <div key={key} style={{color: cohortObj[key].proColor}}>
                    setTimeout(( => {
                    <HexagonComponent />
                    }, randomInc))
                </div>
            ))}
        </div>
    );
}
*/

const IncrementFriends = () => {
    const [currentFriend, setCurrentFriend] = useState(null);

    useEffect(() => {
        for (const key in cohortObj) {
            cohortObj[key].proColor = colors[Math.floor(Math.random()*colors.length)];
        }

        const displayFriend = () => {
            const theKeys = Object.keys(cohortObj);
            const randomFriend = theKeys[Math.floor(Math.random()*theKeys.length)];
            setCurrentFriend(cohortObj[randomFriend]);
            setTimeout(displayFriend, randomInc());
        };

        displayFriend();
    }, []);

    return (
        <div>
            {currentFriend && (
                <div style={{ color: currentFriend.proColor }}>
                    <HexagonComponent person={currentFriend} color={currentFriend.proColor}/>
                    
                </div>//need to change to individual profile component
            )}
        </div>
    );
}




export default IncrementFriends;




//click on profile, and it blows up into screen, with name of song they're listening to (that matches their color), and their previous messages
    //under these messages, you have the abiity to reply to their comment
    //have ability to exit out and return to home screen


//have not tested, but property color and random increment should work and render. Need to add logic to create hexagons, and display on screen