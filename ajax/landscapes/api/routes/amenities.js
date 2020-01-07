const express = require('express');
const mongoose = require('mongoose');
const Amenity = require('../models/amenitiesModel');
const router = express.Router();

router.get('/', (req, res, next) => {
  const myResponse = {
    name: 'Jason',
    last: 'Huaman'
  }

  next()
})
.exec()
.then(result => {
  res.status(200).json({
    myResponse
  })
})

module.exports = router;
