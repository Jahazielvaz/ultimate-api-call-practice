const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const Country = require('../models/countriesModel');

router.get('/', (req, res, next) => {
  Country.find()
  .exec()
  .then(response => {
    res.status(200).json({
      message: "Here are the countries currently stored in our database",
      list: {
        response
      }
    })
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

router.get('/:countryId', (req, res, next) => {
  const id = req.params.countryId;
  Country.findById(id)
  .exec()
  .then(response => {
    res.status(200).json({message: "Here's your requested country", response})
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
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
    if(response.landscape === null){
      res.status(404).json({error: "You must include a landscape in your request"})
    } else {
      res.status(201).json({
        message: 'Your country has been posted',
        country: response
      })
    }
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

// PATCH REQUEST
router.patch('/:countryId', (req, res, next) => {
  const id = req.params.countryId;
  Country.update({_id: id}, {$set: req.body})
  .exec()
  .then(response => {
    res.status(200).json({message: "Country has been updated in our records", response})
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

module.exports = router;
