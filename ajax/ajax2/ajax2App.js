let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: true});

// DATABASE
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;

// DB DATA
let DATABASE_NAME = 'start';
let USER_NAME = 'imagineTech';
let PASSWORD = 'Chato225%24%23%40';
let URL_STRING = `mongodb+srv://${USER_NAME}:${PASSWORD}@start-xnmb4.mongodb.net/test?retryWrites=true&w=majority`;

app.use('/', express.static(__dirname));
app.use(urlencoded)

app.get('/contact', (req,res) => {
  res.sendFile(__dirname + '/ajax2Index.html')
})

app.post('/contact', (req, res) => {
  collection.insert(req.body)
  res.send("Success!")
})

let database, collection;


//Server
let port = 4000;
app.listen(port, () => {
  MongoClient.connect(URL_STRING, {useNewUrlParser: true}, (error, client) => {
    if(error){
      throw error
    }

     database = client.db(DATABASE_NAME);
     collection = database.collection('contact')
  })
  console.log(`listening to port ${port}`)
})
