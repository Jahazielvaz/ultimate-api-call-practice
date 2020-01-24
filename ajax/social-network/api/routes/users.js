const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/usersModel');

router.post('/login', (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length < 1){
      res.status(422).json({message: 'Auth Failed'});
    }

    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(err){
        res.status(422).json({message: 'Auth Failed'});
      }

      const token = jwt.sign(
        {
        email: user[0].email,
        userId: user[0]._id
      },
      process.env.JWT_KEY,
      {
        expiresIn: '1h'
      }
    ); //End of jwt method.

    return res.status(200).json({
      message: 'Auth Success',
      data: token
    })
  }) //End of bcrypt
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

router.post('/registration', (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(result => {
    if(result.length >= 1){
      return res.status(401).json({message: 'User Exists!'});
    }

    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if(err){
        return res.status(500).json({error: err})
      }

      const user = new User({
        _id: mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
      });

      user.save()
      .then(data => {
        res.status(201).json({
          message: 'Your username and password have been registered',
          user: data
        });

        console.log(data)
      })
      .catch(err)
    }); //End of bcrypt encryption
  })
  .catch(err => {
    res.status(500).json({error: err})
  }); //End of promise


}); //End of post request




module.exports = router;
