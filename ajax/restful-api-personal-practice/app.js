const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// APP MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROUTES





module.exports = app;
