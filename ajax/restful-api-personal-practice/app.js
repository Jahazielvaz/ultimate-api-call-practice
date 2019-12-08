const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// App Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// CORS HANDLING
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    return res.status(200).json({});
  }

  next()
})

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,{
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// Routes
const fighterRoutes = require('./api/routes/fighterRoutes');
app.use('/fighters', fighterRoutes);

// ERROR HANDLING
app.use((req, res, next) => {
  const error = new Error('Route Not Found');

  next(error)
})

app.use((error, req, res, next) => {
  res.status(404).json({error: {
    error: error.message
  }})
})

module.exports = app;
