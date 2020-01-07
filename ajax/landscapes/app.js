const express = require("express");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// APP MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/Landscapes?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// CORS ERROR HANDLING
app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({})
  };

  next();
});

// ROUTES
const landscapeRoutes = require('./api/routes/landscapes');
const amenityRoutes = require('./api/routes/amenities');

// ROUTES MIDDLEWARE
app.use('/landscapes', landscapeRoutes);
app.use('/amenities', amenityRoutes);

app.use('/', (req, res, next) => {
  const error = new Error("Route Not Found");
  res.status(404).json({
    error: error.message
  })

  next();
});


module.exports = app;










  //
