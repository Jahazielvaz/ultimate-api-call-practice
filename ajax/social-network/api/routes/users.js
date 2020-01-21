const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/usersModel");

router.get('/', (req, res, next) => {
  User.find()
  .exec()
  .then(result => {
    res.status(200).json({
      message: 'Here\'s the full list of users in our database',
      list: result
    });
  })
  .catch(error => {
    res.status(500).json({ error: error })
  })

})//End of get route

router.post('/signin', (req, res, next) => {
  User.find({username: req.body.username})
  .exec()
  .then(user => {
    if(user.length < 1){
        return res.status(401).json({
            message: 'Auth Failed'
      });
    }

    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(err){
          return res.status(401).json({message: 'Auth Failed'})
      }

      if(result){
        return res.status(200).json({message: 'Auth Successful'})
      }

    }) //End of bcrypt compare


  }) //End of then block
  .catch(error => {
    res.status(500).json({error: error})
  })
})

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
  .catch(error => {
    res.status(500).json({error: error})
  })
})


module.exports = router;
