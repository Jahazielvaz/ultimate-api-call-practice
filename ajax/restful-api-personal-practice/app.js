const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// App Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
const fighterRoutes = require('./api/routes/fighterRoutes');
app.use('/fighters', fighterRoutes);


module.exports = app;
