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
}); //End of get request

router.get('/:landscapeId', (req, res, next) => {
  const id = req.params.landscapeId
  Landscape.findById(id)
  .exec()
  .then(response => {
    res.status(200).json({message: "Your requested record has been delivered", record: response})
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

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

    console.log(req.body)
  })
  .catch(err => {
    res.status(500).json({error: {
      error: err
    }})
  })
}); // End of post request

router.patch('/:landscapeId', (req, res, next) => {
  const id = req.params.landscapeId;
  Landscape.update({_id: id}, {$set: req.body})
  .exec()
  .then(response => {
    res.status(200).json({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description
    })
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})


module.exports = router;
