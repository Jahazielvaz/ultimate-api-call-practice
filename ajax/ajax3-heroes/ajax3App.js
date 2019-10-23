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

// Routes


// Supporting Variables
let database, collection;


// Server
let port = PROCESS.env.port || 5000;
app.listen(port, (err) => {
  if(err){
    throw error;
  }


  console.log(`Listening to port ${port}`);
})
