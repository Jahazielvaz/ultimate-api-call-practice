let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({extended: false});

// DATABASE
let MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;

 let DATABASE_NAME = 'start',
 USER_NAME = 'imagineTech',
 PASSWORD = 'Chato225$#@',
 URL_STRING = `mongodb://${USER_NAME}:${PASSWORD}@start-shard-00-00-xnmb4.mongodb.net:27017,start-shard-00-01-xnmb4.mongodb.net:27017,start-shard-00-02-xnmb4.mongodb.net:27017/test?ssl=true&replicaSet=start-shard-0&authSource=admin&retryWrites=true&w=majority`;


// PARSERS
app.use(urlencoded)
app.use(bodyParser.json())

let database, collection;

// let userOutput = document.getElementById('user-output');

// REQUESTS
app.use('/', express.static(__dirname))

app.get('/api', (req, res) => {
  res.sendFile(__dirname + '/ajaxIndex.html')
})

app.post('/api', urlencoded, (req, res) => {
  console.log(req.body)
  res.sendFile(__dirname + '/successPage.html')
})


//server
let port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
