//EXPRESS SETUP
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: true});

//Middleware
app.use(express.static(__dirname));
app.use(urlencoded);

// DATABASE SETUP
let MongoClient = require('mongodb').MongoClient,
ObjectId = require('mongodb').ObjectID;

// DB info
let DATABASE_NAME = 'start',
USER_NAME = 'imagineTech',
PASSWORD = 'Chato225%24%23%40',
URL_STRING = `mongodb+srv://${USER_NAME}:${PASSWORD}@start-xnmb4.mongodb.net/test?retryWrites=true&w=majority`

//Routes
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/ajax2Index.html');
})

app.post('/contact', (req, res) => {
  collection.insert(req.body);
  res.sendFile(__dirname + '/ajax2Response.html');
})


// DB Variables
let database,
collection;


//Server
let port = process.env.port || 4000;
app.listen(port, (err) => {
  if(err){
    console.log(err)
    throw error
  }

  MongoClient.connect(URL_STRING, {useNewUrlParser: true}, (err, client) => {
    if(err){
      throw error
    }

    database = client.db(DATABASE_NAME);
    collection = database.collection('contact');
  })


  console.log(`Listening to port ${port}`);
})
