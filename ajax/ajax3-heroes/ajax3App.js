// EXPRESS SETUP
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: true});

// Middleware
app.use(express.static(__dirname));
app.use(urlencoded)

// DATABASE SETUP
MongoClient = require('mongodb').MongoClient,
ObjectId = require('mongodb').ObjectID

// DB Info
let DATABASE_NAME = 'start',
USER_NAME = 'imagineTech',
PASSWORD = 'Chato225%24%23%40',
URL_STRING = `mongodb+srv://${USER_NAME}:${PASSWORD}@start-xnmb4.mongodb.net/test?retryWrites=true&w=majority`;

// Hero Object
let heroes = [
  {
    name: 'Izuku Midorya',
    quirk: 'One For All',
    image: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/d/d9/Izuku_Midoriya_school_profile.png/revision/latest?cb=20190129015623',
    stats: {
      power: 'E',
      speed: 'E',
      technique: 'B',
      intelligence: 'B',
      cooperativeness: 'A'
    }
  },
  {
    name: 'Katsuki Bakugo',
    quirk: 'Explosion',
    image: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/8/83/Katsuki_Bakugo_School_Uniform_Full_Body.png/revision/latest?cb=20190812065435',
    stats: {
      power: 'A',
      speed: 'B',
      technique: 'A',
      intelligence: 'B',
      cooperativeness: 'E'
    }
  },
  {
    name: 'Shoto Todoroki',
    quirk: 'Fire and Ice',
    image: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/c/c4/Shoto_Todoroki_school_profile.png/revision/latest?cb=20170728153443',
    stats: {
      power: 'A',
      speed: 'B',
      technique: 'A',
      intelligence: 'B',
      cooperativeness: 'C'
    }
  },
  {
    name: 'Tsuyu Asui',
    quirk: 'Frog',
    image: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/ff/Tsuyu_Asui_Full_Body_School_Uniform_Anime.png/revision/latest?cb=20160118114942',
    stats: {
      power: 'E',
      speed: 'C',
      technique: 'B',
      intelligence: 'B',
      cooperativeness: 'A'
    }
  },
]

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ajax3Index.html');
})



// Supporting Variables
let database, collection;


// Server
let port = process.env.port || 5000;
app.listen(port, () => {

  MongoClient.connect(URL_STRING, {useNewUrlParser: true}, (err, client) => {
    if(err){
      throw error;
    }

    database = client.db(DATABASE_NAME);
    collection = database.collection('heroes');
    // collection.insert(heroes)
  })


  console.log(`Listening to port ${port}`);
})
