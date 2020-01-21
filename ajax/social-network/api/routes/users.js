const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/usersModel');
const error = require('./error');
const bcrypt = require('bcrypt');

router.post('/', (req, res, next) => {
  User.find({username: req.body.username})
  .exec()
  .then(user => {
    if(user.length >= 1){
      res.status(500).json({message: 'Username exists in our records'})
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          return res.status(500).json({error: err})
        } else {
          const user = new User({
            _id: mongoose.Types.ObjectId(),
            username: req.body.username,
            password: hash
          });

          user.save()
          .then(result => {
            res.status(201).json({
              message: 'Your username and password have been created',
              user: result
            })
          })
          .catch(error)
        }
      })
    }
  })
  .catch(error);
});

module.exports = router;
