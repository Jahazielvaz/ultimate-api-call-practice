const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Activity = require("./api/models/activitiesModel");


// APP MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.MONGO_ATLAS_PW}@start-xnmb4.mongodb.net/Activities?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// app.get('/', (req, res) => {
//   res.status(200).json({message: ""})
// })

const activityRoutes = require("./api/routes/activities");

app.use('/activities', activityRoutes);






module.exports = app;
