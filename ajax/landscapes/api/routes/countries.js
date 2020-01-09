const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const Country = require('../models/countriesModel');

router.get('/', (req, res, next) => {
  res.status(200).json({message: 'This route is currenly a test run, and it seems to be working just fine'})
})

router.get('/:countryId', (req, res, next) => {
  res.status(200).json({message: 'This route is also working'})
})

router.post('/', (req, res, next) => {
  const country = new Country({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    landscape: req.body.landscapeId,
    countryDescription: req.body.description
  })

  country.save()
  .then(response => {
    res.status(201).json({
      message: 'Your country has been posted',
      country: response
    })
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

module.exports = router;
