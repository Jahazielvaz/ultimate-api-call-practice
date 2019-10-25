//EXPRESS SETUP
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: true})

//Middleware
app.use(express.static(__dirname));
app.use(urlencoded)

// DB SETUP
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;

// DB Data
let DATABASE_NAME = 'start',
USER_NAME = 'imagineTech',
PASSWORD = 'Chato225%24%23%40',
URL_STRING = `mongodb+srv://${USER_NAME}:${PASSWORD}@start-xnmb4.mongodb.net/test?retryWrites=true&w=majority`;

// Routes
app.get('/heroes', (req, res) => {
  res.sendFile(__dirname + '/ajax3Index.html')
})

// Supporting Variables
let database, collection;


// Server
let port = process.env.port || 4000;
app.listen(port, () => {
  MongoClient.connect(URL_STRING, {useNewUrlParser: true}, (err, client) => {
    if(err) {
      throw error
    }

    database = client.db(DATABASE_NAME);
    collection = database.collection('heroes')

  })
})









//
