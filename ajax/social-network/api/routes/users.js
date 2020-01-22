const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/usersModel');

router.post('/signup', (req, res, next) => {
  User.find({username: req.body.username})
  .exec()
  .then(result => {
    if(result.length >= 1){
      return res.status(422).json({
        message: 'Username exists!'
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          res.status(500).json({error: err})
        } else {
          const user = new User({
            _id: mongoose.Types.ObjectId(),
            username: req.body.username,
            password: hash
          })

          user.save()
          .then(user => {
            res.status(201).json({
              message: 'User has been logged to our records',
              user: user
            })
          }) //End of .then
        }
      }) //Bcrypt hash
    }
  })
}) //End of post request







module.exports = router;
