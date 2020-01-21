const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require("../models/usersModel");
const error = require('./error');

router.post('/register', (req, res, next) => {
  User.find({username: req.body.username})
  .exec()
  .then(result => {
    if(result.length >= 1){
      return res.status(422).json({message: 'User already exists'});
    } else {
      bcrypt.hash(req.body.password, 10, (error, hash) => {
        if(error){
          return res.status(500).json(error)
        } else {
          const user = new User({
            _id: mongoose.Types.ObjectId(),
            username: req.body.username,
            password: hash
          });

          user.save()
          .then(user => {
            res.status(201).json({
              message: 'Your username already exists',
              user: user
            })
          })
        } //end of inner else statement
      }) //End of bcrypt hash
    }
  })
  .catch(error)
})


module.exports = router;
