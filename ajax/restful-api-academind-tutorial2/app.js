const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'))

// Routes
const productsRoute = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

// Requests
app.use('/products', productsRoute)
app.use('/orders', orderRoutes)

// Error Handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error)

})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({error: {
    message: error.message
  }})
})

module.exports = app;
