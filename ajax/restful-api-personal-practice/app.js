const express = require('express'),
app = express();


// Routes
const userRoutes = require('./api/routes/userRoutes');


// Middleware
app.use('/users', userRoutes);


module.exports = app;
