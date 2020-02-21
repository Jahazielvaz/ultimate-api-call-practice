const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const morgan = require('morgan');
const mongoose = require('mongoose');

// APP MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/friends-network?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


const friendRoutes = require('./api/routes/friends-routes');

app.use('/friends', friendRoutes);





module.exports = app;
