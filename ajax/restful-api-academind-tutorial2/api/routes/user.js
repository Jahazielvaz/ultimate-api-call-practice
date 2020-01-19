const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require('../models/userModel');

router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.email, 10, (err, hash) => {
    if(err){
      return res.status(500).json({
        error: err
      })
    } else {
      const user = new User({
        _id: mongoose.types.ObjectId(),
        username: req.body.username,
        password: hash
      });

      user.save()
      .then(result => {
        rs.status(201).json({
          message: 'User has been created',
          user: result
        });

        console.log(result)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
    }
  });


  user.save()
  .then()
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})



module.exports = router;
