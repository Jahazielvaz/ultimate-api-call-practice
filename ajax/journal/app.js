// EXPRESS SETUP
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: false});
const morgan = require('morgan');

// Middleware
app.use(urlencoded);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(morgan('dev'));

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
  res.sendFile(__dirname + '/ajax4Journal.html')
})










module.exports = app;


//
