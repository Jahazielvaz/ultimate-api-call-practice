// DEPENDENCIES
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const USER = require('../models/usersModel');

// ROUTES
router.post('/signup', (req, res, next) => {
  USER.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length >= 1){
      return res.status(422).json({message: 'User exists'})
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          res.status(500).json({error: err})
        }

        const user = new USER({
          _id: mongoose.Types.ObjectId(),
          email: req.body.email,
          password: hash
        });

        user.save()
        .then(result => {
          res.status(201).json({
            message: 'New user has been posted',
            user: result
          });
        })
        .catch(err => {
          res.status(500).json({error: err})
        });

      }) //End of bcrypt method
    }


  }) //End of then statement
  .catch(err => {
    res.status(500).json({error: err})
  })
}); //End of post route




module.exports = router;
