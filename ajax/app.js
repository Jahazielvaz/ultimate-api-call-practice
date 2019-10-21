let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({extended: false});

// DATABASE
let MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;

 let DATABASE_NAME = 'start',
 USER_NAME = 'imagineTech',
 PASSWORD = 'Chato225%24%23%40',
 URL_STRING = `mongodb+srv://${USER_NAME}:${PASSWORD}@start-xnmb4.mongodb.net/test?retryWrites=true&w=majority`;


// PARSERS
app.use(urlencoded)
app.use(bodyParser.json())

let database, collection;

// let userOutput = document.getElementById('user-output');

// REQUESTS
app.use('/', express.static(__dirname))

app.get('/people', (req, res) => {
  res.sendFile(__dirname + '/ajaxIndex.html')
})

app.get("/people", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.post('/people', (req, res) => {
  collection.insert(req.body, (error, result) => {
    if(error){
      return res.status(500).send(error)
    }
    res.sendFile(__dirname + '/successPage.html')
  })
}) //end of post request

// DATABASE PART 2
MongoClient.connect(URL_STRING, {useNewUrlParser: true}, (error, client) => {
  if(error){
    throw error;
  }

  database = client.db(DATABASE_NAME);
  database.collection('signin');
  console.log(`Connected to ${DATABASE_NAME}`)

}) //Mongo Client Connection


//server
let port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
