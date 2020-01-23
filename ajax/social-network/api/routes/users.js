const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/usersModel');

router.post('/signin', (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length < 1){
      return res.status(401).json({message: 'Auth Failed'})
    }

    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(err){
        res.status(401).json({message: 'Auth Failed'});
      }

      if(result){
        const token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id
          },
            process.env.JWT_KEY,
            {
              expiresIn: '1h'
            }
        ); //End of token

        return res.status(200).json({
          message: 'Auth Successful',
          token: token
        }); //End of response
      } //End of if statement
    }); //End of bcrypt
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

router.post('/register', (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(result => {
    if(result.length >= 1){
      return res.status(401).json({
        message: 'User exists!'
      });
    }

    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if(err){
        return res.status(500).json({error: err});
      }

      const user = new User({
        _id: mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
      });

      user.save()
      .then(user => {
        res.status(201).json({
          message: 'New user has been registered',
          user: user
        })
      })
      .catch(err => {
        res.status(500).json({error: err})
      });
    })
  })
  .catch(err => {
    res.status(500).json({error: err})
  }); //end of promise
}); //end of post request


module.exports = router;
