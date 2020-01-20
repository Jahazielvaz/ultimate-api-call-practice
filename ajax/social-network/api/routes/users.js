const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/usersModel');
const error = require('./error');

router.post('/signup', (req, res, next) => {
  User.find({username: req.body.username})
  .exec()
  .then(user => {
    if(user.length >= 1){
      res.status(422).json({
        message: "Username already exists"
      })
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          res.status(500).json(error)
        } else {
          const user = new User({
            _id: mongoose.Types.ObjectId(),
            username: req.body.username,
            password: hash
          })

          user.save()
          .then(result => {
            res.status(201).json({
              message: 'Your user id has been successfully stored in our records',
              user: result
            })
          })
          .catch(error)
        }
      })
    }
  })//End of then

  .catch(error)
});





module.exports = router;
