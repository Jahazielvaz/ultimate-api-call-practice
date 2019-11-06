const express = require('express'),
app = express();
const bodyParser = require('body-parser');

// App Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
const players = require('./players');

// Requests
app.use('/players', players)


module.exports = app;
