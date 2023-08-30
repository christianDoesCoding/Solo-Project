//database logic
import mongoose from 'mongoose'; //need to make sure I have mongoose required in application

const MONGO_URI = 'mongodb+srv://christiandoescoding:SummerDay469@cluster0.nj75yer.mongodb.net/?retryWrites=true&w=majority';

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
