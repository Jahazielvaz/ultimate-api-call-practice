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
      request: {
        message: "Metadata for requesting all routes",
        type: 'GET',
        url: "localhost:3000/landscapes"
      }
    })
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
  .then(place => {
    const requests = {
      getAllLandscapes: {
        type: 'GET',
        url: 'localhost:3000/landscapes',
      },
      getASingleLandscape: {
        type: 'GET',
        url: 'localhost:3000/landscapes/',
        info: 'Include a landscape ID at the end of the url'
      },
      updateLandscape: {
        type: 'PATCH',
        url: 'localhost:3000/landscapes',
        body: {
          name: 'STRING',
          location: 'STRING',
          description: 'STRING'
        }
      },
      deleteLandscape: {
        type: 'DELETE',
        url: 'localhost:3000/landscapes',
        info: 'Include the landscape ID at the end of the url following a /'
      }
    } //End of requests

    res.status(201).json({
      message: "Your new landscape has been posted to our database",
      landscape: place,
      requests: requests
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
      description: req.body.description
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
      landscape: response
    })
  }) //end of then
  .catch(err => {
    res.status(500).json({error: err})
  })
})




module.exports = router;
