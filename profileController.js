//coordination of different actions with a profile
//const Profile = require('./profileModel');
//import song object from songSelector
import firstObj from './songSelector.js'; //consider songMapping for description

const profileController = {

    //create New profile
    
    //search for a profile when logging in
    
    //clicking on button directing to a song
    selectSong: (req, res, next) => {
                const { colorName } = req.query;
                const songURL = firstObj[colorName];
                
                if (songURL) {
                    res.json({ firstObj: songURL});
                    next();
                } else {
                    res.status(404).send('oops, not that one... pick a different one :)')
                }
                /*
                let found = false;
                    for (const key in firstObj) {
                        if (key === colorName) {
                            res.locals.linkResp = firstObj[key];
                            found = true;
                            break;
                        }
                        if (found === true) {return next()};
                    }
                        return next({
                            log: 'error found in getColor function',
                            status: 400,
                            message: { err: 'oops, not that color... pick a different one :)' }
                        })
                        */
                },
    
    //adding colors to collectedColors array
    
    //Explore button - does not track song selections
    
    //profile AI picture rendering
    
    //Liking/ disliking a song
    
    //STRETCH: delete profile
    //STRETCH: update profile

};

export default profileController;