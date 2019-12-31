const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// App Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
const landscapeRoutes = require('./routes/landscapes');

// Routes Middleware
app.use('/landscapes', landscapeRoutes);






module.exports = app;
