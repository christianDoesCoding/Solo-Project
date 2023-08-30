import { useState, useEffect } from 'react';


//logic where songs are chosen in coordinance with colors

//possibly consider spotify without an account

//Create an object where key is associated with the color shade. If disliked, it will have an alternative song to pull up that's more epitomizing of that shade

// regular shades get key 'i', light shades get 'ia', dark shades get 'ib'// added as properties for accessibility
    const firstObj = {
        3a: 'https://www.youtube.com/watch?v=_YOvQNgpfXY&ab_channel=COLORS'
    }

//when button is clicked, it will open a new page in a new tab
//upon returning back to screen, message will pop up asking for feedback


//create a GET request, where once button is clicked, it will lead to /links, and fromt there it will search for coordinating url, then redirect to page


export default firstObj;