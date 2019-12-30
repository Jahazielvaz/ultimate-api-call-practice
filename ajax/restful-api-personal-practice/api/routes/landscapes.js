const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Location = require('../models/landscapesModel');

router.post('/', (req, res, next) => {

  const place = new Location({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    address: req.body.address,
    description: req.body.description
  })

  place.save()
  .then(result => {
    res.status(201).json({
      landscape: {
        _id: result._id,
        name: result.name,
        address: result.address,
        description: result.description
      }
    })
  })
  .catch(error => {res.status(500).json(error)})

  next()
})

module.exports = router;
