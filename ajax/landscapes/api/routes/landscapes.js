const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Landscape = require('../models/landscapeModel');
const requests = require('./metadata');
const multer = require('multer');


const upload = multer({dest: 'api/routes/imageuploads/'})

router.get('/', (req, res, next) => {
  Landscape.find()
  .exec()
  .then(response => {
    res.status(200).json({
      message: 'Here are the requested landscapes',
      requests,
      list: response.map(result => {
        return {
          landscape: result,
          request: 'GET',
          url: `localhost:3000/landscapes/${result._id}`
        }
      })
    }) //End of res
  }) //End of then
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
    res.status(200).json({
      message: "Your requested record has been delivered",
      record: response,
      requests
    })
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

router.post('/', upload.single('imageFile'), (req, res, next) => {
  const landscape = new Landscape({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    location: req.body.location,
    description: req.body.description
  }); //End of landscape  object instance

  landscape.save()
  .then(place => {

    res.status(201).json({
      message: "Your new landscape has been posted to our database",
      landscape: place,
      requests
    })
  })
  .catch(err => {
    res.status(500).json(err)
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
      description: req.body.description,
      requests
    })
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

router.delete('/:landscapeId', (req, res, next) => {
  const id = req.params.landscapeId;
  Landscape.remove({_id: id})
  .exec()
  .then(response => {
    res.status(200).json({
      message: 'Your landscape has been removed from our records',
      landscape: response,
      requests
    })
  }) //end of then
  .catch(err => {
    res.status(500).json({error: err})
  })
})




module.exports = router;
