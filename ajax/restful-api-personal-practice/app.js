const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// App Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,{
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// Routes
const fighterRoutes = require('./api/routes/fighterRoutes');
app.use('/fighters', fighterRoutes);


module.exports = app;
