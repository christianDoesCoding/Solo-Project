//database logic
import mongoose from 'mongoose'; //need to make sure I have mongoose required in application

const MONGO_URI = 'mongodb+srv://christiandoescoding:SummerDay469@honeytones.ugqbxky.mongodb.net/?retryWrites=true&w=majority&appName=honeyTones'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'accounts' //dbName: honeyTone
})
.then(() => console.log('connected to Mongo DB.'))
.catch(err => console.log(err));


const Schema = mongoose.Schema();

const eachProfile = new Schema({
    username: String,
    password: String,
    collectedColors: Array
})

const Profile = mongoose.model('profile', eachProfile);


export default Profile;


/*
Schema:
- username, password
- name
- selection history
- session (JWT)
- userID

- Song ID
- genre
- text for comments associated with song, based from  user
- date posted


Comments --| id, name, email, song_id, comment, date
Embedded_songs --| song_id, genre, runtime, name, writer, date produced, 
Sessions --| id, user_id, jwt
Users --| id, name, email, password
*/

