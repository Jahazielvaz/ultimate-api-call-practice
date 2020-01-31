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

router.post('/register', (req, res, next) => {
  Artist.find({name: req.body.name})
  .exec()
  .then(user => {
    if(user.length >= 1){
      return res.status(401).json({message: 'Artist Exists'});
    }

    bcrypt.hash(req.body.password, 10, (err, hash) => {
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
          message: 'New artist has been posted',
          artist: result
        });
      })
      .catch(err => {
        res.status(500).json({error: err});
      });
    }); //End of bcrypt hash
  })
  .catch(err => {
    res.status(500).json({error: err});
  }); //End of promise block
}); //end of post route

// LOGIN ROUTE
router.post('/login', (req, res, next) => {
  Artist.find({name: req.body.name})
  .exec()
  .then(user => {
    if(user.length < 1){
      return res.status(401).json({message: 'Calling the cops on your ass'});
    }

    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(err){
        return res.status(401).json({message: 'Not Authorized'});
      }

      if(result){
        const token = jwt.sign({
          name: user[0].name,
          field: user[0].field,
          networth: user[0].networth
        },
          process.env.TOKEN_KEY,
        { expiresIn: '1h'}
      ); //End of token

        return res.status(200).json({
          message: 'Welcome User',
          artist: token
        })
      }

      res.status(401).json({message: 'You Suck'})
    }); //End of bcrypt compare
  })
  .catch(err => {
    res.status(401).json({message: 'Unauthorized! Calling the cops on your ass!'})
  })
})


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
