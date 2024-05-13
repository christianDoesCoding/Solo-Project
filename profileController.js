//coordination of different actions with a profile
//const Profile = require('./profileModel');
//import song object from songSelector
import firstObj from './songSelector.js'; //consider songMapping for description

const profileController = {

    //create New profile
    
    //search for a profile when logging in
    
    //clicking on button directing to a song
    selectSong: (req, res, next) => {

        const { numID } = req.params;
        const songURL = firstObj[numID];

        if (songURL) {
            res.locals.linkResp = songURL;
            next();
        } else {
            res.status(404).send('Song URL not found');
        }
    }
    };
    
    export default profileController;
        
        /*
                const { colorName } = req.query; //should pass in associated key
                const songURL = firstObj[colorName]; //actual link to redirect
                
                if (songURL) {
                    res.json({ firstObj: songURL});
                    next();
                } else {
                    res.status(404).send('Exception error has occurred... could be incorrect input or unrecognized key')
                }

                let found = false;
                    for (const key in firstObj) {
                        if (key === colorName) {
                            res.locals.linkResp = firstObj[key];
                            found = true;
                            break;
                        }
                    }
                    if (found === true) {return next()}
                    else {
                        return next({
                            log: 'error found in selectSong function',
                            status: 400,
                            message: { err: 'oops, not that color... pick a different one :)' }
                        })
                    }
                },
        */
    
    //adding colors to collectedColors array
    
    //Explore button - does not track song selections
    
    //profile AI picture rendering
    
    //Liking/ disliking a song
    
    //STRETCH: delete profile
    //STRETCH: update profile