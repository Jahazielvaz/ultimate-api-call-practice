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

// Restful Routes Middleware
app.use('/users', userRoutes)

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
