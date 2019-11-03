const express = require('express'),
app = express();

// routes
const userRoutes = require('./api/routes/userRoutes');

// Middleware
app.use('/users', userRoutes)


module.exports = app;
