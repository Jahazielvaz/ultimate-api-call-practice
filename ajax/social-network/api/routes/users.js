const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const User = require('../models/usersModel');

router.post('/register', (req, res, next) => {
  User.find({username: req.body.username})
  .exec()
  .then(user => {
    if(user.length >= 1){
      return res.status(422).json({message: 'Username Exists'})
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          res.status(422).json({
            message: err
          })
        }
        const user = new User({
          _id: mongoose.Types.ObjectId(),
          username: req.body.username,
          password: hash
        })

        user.save()
        .then(userData => {
          res.status(201).json({
            message: 'Username and password have been stored in our database',
            user: userData
          })
        })
      })
    }
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})





module.exports = router;
