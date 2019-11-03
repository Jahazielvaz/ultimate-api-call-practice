const express = require('express'),
app = express();

const morgan = require('morgan');

// Project Middleware
app.use(morgan('dev'));


// Routes
let productRoutes = require('./api/routes/products');
let orderRoutes = require('./api/routes/orders');

// Routes Middleware
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Error Handling Middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status(404);
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: "Not found"
    }
  })
})

module.exports = app;
