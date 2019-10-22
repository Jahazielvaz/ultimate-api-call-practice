// Express Setup
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: true})

app.use('/', express.static(__dirname));
app.use(urlencoded)

// DATABASE
MongoClient = require('mongodb').MongoClient;
ObjectId = require('mongodb').ObjectID;

// DB INFO
let USERNAME = 'imagineTech',
PASSWORD = 'Chato225%24%23%40',
DATABASE_NAME = 'start',
URL_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@start-xnmb4.mongodb.net/test?retryWrites=true&w=majority`

let database,
dbCollection;

// ROUTES
app.get('/contact', (req, res) => {
  res.sendFile(__dirname +'/ajax2Index.html')
})

app.post('/contact', (req, res) => {
  dbCollection.insert(req.body, (err, result) => {
    if(err){
      throw error
    }

    res.sendFile(__dirname + '/ajax2Response.html')
  })
})

//Server
let port = process.env.port || 4000;
app.listen(port, () => {
  MongoClient.connect(URL_STRING, {useNewUrlParser: true}, (err, client) => {
    if(err){
      throw error;
    }
    database = client.db(DATABASE_NAME);
    dbCollection = database.collection('contact')

  })
})
