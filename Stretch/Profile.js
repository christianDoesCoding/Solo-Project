import React, { useState, useEffect } from 'react';
import '/src/style.css'
import HexagonComponent from '../src/hexagons.js'; //passes in storeColor array for AI generating picture
import logo from '../../../../logo.png'
//STRETCH

//greetings array //random greeting fades in after screen is rendered //stays for a few seconds, then fades out and lastly fades to logo 
const greetArr = [
    'Bonjour',
    'Welcome back',
    'Glad you made it',
    'Long time no see'
];

//depart array //when clicking on a button, before opening page, profile says a goodbye message
const departArr = [
    'Later',
    'See ya',
    'Have fun',
    'Au revoir',
    'Peace ✌️',
    'Don\'t get lost',
    'brb'
    
];

const tooquick = ['pick a song first',
'don\'t touch me',
'nah, I don\'t really feel like it']

export default function ProfileContainer() {
    const [greetings, setGreeting] = useState('');


useEffect(() => {
    const greetArrLength = greetArr.length;
    setGreeting(greetArr[Math.floor(Math.random()*greetArrLength)]) 

    const profileContainer = document.getElementById('profile-container');
    profileContainer.classList.add('loaded');
},[]);

    return (
        <div id="profile-container" className="profile-container">
            <div className="profile-comb">
                <div className="greeting">{greetings}
                <img src={logo} alt='logo' className='my-logo' />
                </div>
            </div>
        </div>
    )
}





/*
//handles stored color and dahl-e AI logic
const storedColor = (storedColors) {//4 most recent colors are passed in... use AI to construct an image when clicked   
}; 

const artAI = () => {

}
*/
