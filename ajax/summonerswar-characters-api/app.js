// Dependencies
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// General Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// CORS HEADERS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  next()
})

// Routes
const characterRoutes = require('./api/routes/characters');
app.use('/characters', characterRoutes);


module.exports = app;
