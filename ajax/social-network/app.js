const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//App Middlware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/public', express.static('static'));

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/Social-Network?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// CORS HEADERS
app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, PATCH');
    return res.status(200).json({});
  }
  next();
})

// Routes
const userRoutes = require('./api/routes/users');
app.use('/users', userRoutes);








module.exports = app;
