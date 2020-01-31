const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Artist = require('../models/artistModel');

router.get('/:artistId', (req, res, next) => {
  const id = req.params.artistId;
  Artist.findById(id)
  .exec()
  .then(result => {
    res.status(200).json({message: 'Requested Artist Name', artist: result});
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
}); //End of get request


router.get('/', (req, res, next) => {
  Artist.find()
  .exec()
  .then(artists => {
    res.status(200).json({
      message: 'Here\'s the list of artists in our database',
      artists: artists
    });
  })
  .catch(err => {
    res.status(500).json({error: err})
  });
}); //End of get route



router.patch('/:artistId', (req, res, next) => {
  const id = req.params.artistId;
  Artist.update({_id: id}, {$set: req.body})
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Artist has been updated",
      artist: result
    });
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
}); //End of patch request


module.exports = router;
