// EXPRESS SETUP
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded({extended: false});
const morgan = require('morgan');
const mongoose = require('mongoose');


// Middleware
app.use(urlencoded);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(morgan('dev'));

// DB
const USER_NAME = 'imagineTech';
const DATABASE = 'journal';
mongoose.connect(`mongodb+srv://${USER_NAME}:${process.env.JOURNAL_PASSWORD}@start-xnmb4.mongodb.net/journal?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Restful Routes
const userRoutes = require('./api/routes/users');
const userEntries = require('./api/routes/entries');

// Restful Routes Middleware
app.use('/users', userRoutes)
app.use('/entries', userEntries)

// CORS HANDLING
app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    return res.status(200).json({})
  }

  next();
})

// UI Routes
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
