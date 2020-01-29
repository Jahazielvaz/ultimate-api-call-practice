const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Artist = require('./api/models/artistModel');

// APP Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS Handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');

  if(req.method === 'OPTIONS'){
     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
     return res.status(200).json({})
  }

  next()
});

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/Artists?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Routes
const artistRoutes = require('./api/routes/artist');

app.use('/artist', artistRoutes);









module.exports = app;
