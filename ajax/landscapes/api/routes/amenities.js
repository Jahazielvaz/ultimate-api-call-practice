const express = require('express');
const mongoose = require('mongoose');
const Amenity = require('../models/amenitiesModel');
const router = express.Router();
const app = express();

app.use('/', (req, res, next) => {
  const myResponse = {
    name: 'Jason',
    last: 'Huaman'
  }

  // res.status(200).json({message: 'This route works'})
  // return myResponse;
  next(myResponse)
})

router.get('/', (myResponse, req, res, next) => {
  res.status(200).json({name: myResponse})
})



module.exports = router;
