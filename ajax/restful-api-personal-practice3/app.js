const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

// App Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
const Products = require('./routes/products');
const EditProduct = require('./routes/editProduct');

//Routing
app.use('/products', Products);
app.use('/edit-product', EditProduct);

module.exports = app;
