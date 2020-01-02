const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Landscape = require('../models/landscapeModel');

router.get('/', (req, res, next) => {
  Landscape.find()
  .exec()
  .then(response => {
    res.status(200).json({
      message: 'Here are the requested landscapes',
      list: response
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
});

router.post('/', (req, res, next) => {
  const landscape = new Landscape({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    location: req.body.location,
    description: req.body.description
  }); //End of landscape  object instance

  landscape.save()
  .then(response => {
    res.status(201).json({
      message: 'Congratulations. Your landscape has beep posted',
      landscape: response
    })
  })
  .catch(err => {
    res.status(500).json({error: {
      error: err
    }})
  })
});

module.exports = router;
