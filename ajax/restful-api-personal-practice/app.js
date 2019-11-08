const express = require('express'),
app = express();
const bodyParser = require('body-parser');

// routes
const userRoutes = require('./api/routes/userRoutes');

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use('/users', userRoutes);


module.exports = app;
