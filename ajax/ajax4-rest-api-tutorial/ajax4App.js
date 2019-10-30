// EXPRESS SETUP
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: false});

// Middleware
app.use(urlencoded);
app.use(express.static(__dirname));

// DATABASE
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;

// DB Info
let USERNAME = 'imagineTech',
PASSWORD = 'Chato225%24%23%40',
DATABASE_NAME = 'journal',
URL_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@start-xnmb4.mongodb.net/test?retryWrites=true&w=majority`;

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ajax4Index.html');
})

app.get('/signin', (req, res) => {
  res.sendFile(__dirname + '/ajax4Signin.html');
})

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/ajax4Register.html');
})

app.post('/register', (req, res) => {
  collection.insert(req.body)
})

// Variables
let collection, database;


// Server
let port = process.env.port || 3000;
app.listen(port, () => {

  MongoClient.connect(URL_STRING, {useNewUrlParser: true}, (error, client) => {
    if(error){
      throw error;
    }
    
    database = client.db(DATABASE_NAME);
    collection = database.collection('registration');
  })

  console.log(`Listening to port ${port}`);
})

















//
