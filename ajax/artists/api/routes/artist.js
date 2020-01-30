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

router.post('/user', (req, res, next) => {
  const name = req.body.name;
  Artist.find({name: name})
  .exec()
  .then(result => {
    if(result.length < 1){
      return res.status(401).json({message: 'Unauthorized'});
    }

    bcrypt.compare(req.body.password, result[0].password, (err, artist) => {
      if(err){
        return res.status(401).json({message: 'Unathorized'});
      }
      if(result){
        res.status(200).json({message: "Welcome User", result: artist});
      }
    })
  })
}); //End of post route

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

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err){
      return res.status(500).json({
        message: err
      })
    }

    const artist = new Artist({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      field: req.body.field,
      networth: req.body.networth,
      password: hash
    });

    artist.save()
    .then(result => {
      console.log(result.password);
      res.status(201).json({
        message: 'New artist has been logged',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json({error: err})
    });
  })


}); //End of post route

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
