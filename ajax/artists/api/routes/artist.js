const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Artist = require('../models/artistModel');

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

router.post('/', (req, res, next) => {
  const name = req.body.name;
  Artist.find({name: name})
  .exec()
  .then(result => {
    if(result.length >= 1){
      return res.status(401).json({
        message: 'Artist Exists'
      })
    }
  })

  const artist = new Artist({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    field: req.body.field,
    networth: req.body.networth
  });

  artist.save()
  .then(result => {
    res.status(201).json({
      message: 'New artist has been logged',
      data: result
    });
  })
  .catch(err => {
    res.status(500).json({error: err})
  });
}); //End of post route

router.patch('/', (req, res, next) => {

})


module.exports = router;
