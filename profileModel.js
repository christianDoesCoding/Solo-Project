//database logic
const mongoose = require('mongoose'); //need to make sure I have mongoose required in application

const eachProfile = new schema({
    username: String,
    password: String,
    collectedColors: Array
})

const Profile = mongoose.model('profile', eachProfile);

module.exports {

}

