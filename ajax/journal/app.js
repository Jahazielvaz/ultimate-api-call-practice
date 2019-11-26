// EXPRESS SETUP
let express = require('express'),
app = express(),
bodyParser = require('body-parser'),
urlencoded = bodyParser.urlencoded({extended: false});
const morgan = require('morgan');
const mongoose = require('mongoose');

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.JOURNAL_PASSWORD}@${process.env.DATABASE}-xnmb4.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, {
  collection: process.env.COLLECTION
})

// Middleware
app.use(urlencoded);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(morgan('dev'));

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
  // res.sendFile(__dirname + '/ajax4Journal.html')
  res.status(201).json({data: req.body._id})
})










module.exports = app;


//
