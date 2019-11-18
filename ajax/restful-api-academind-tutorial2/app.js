const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
const productsRoute = require('./api/routes/products');

// Requests
app.use('/products', productsRoute)

module.exports = app;
