const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const err = require('./err');
const jwt = require('jsonwebtoken');


const User = require('../models/userModel');

router.get('/', (req, res, next) => {
  User.find()
  .exec()
  .then(result => {
    res.status(200).json({
      message: "User's List",
      list: result
    })
  })
  .catch(err)
});

router.post('/login', (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length < 1){
      return res.status(401).json({message: 'Auth Failed'})
    }

    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(err){
        return res.status(401).json({response: 'Auth Failed'});
      }

      if(result){
          const token = jwt.sign({
          email: user[0].email,
          userId: user[0]._id
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h"
        }
      ); //End of token
        return res.status(200).json({
          response: 'Auth Successful!',
          token: token
        })
      }
      res.status(401).json({response: 'Auth Failed'})

    });
  })
  .catch(err)
});

router.post('/signup', (req, res, next) => {
  User.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length >= 1){
      return res.status(422).json({
        message: 'user name exists in our records'
      })
    }

      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          return res.status(500).json({
            error: err
          });
        }
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
          });

          user.save()
          .then(result => {
            res.status(201).json({
              message: 'User has been created',
              user: result
            });

            console.log(result)
          })
          .catch(err => {
            res.status(500).json({error: err})
          })

      }); //end of bcrypt section
  })

}) //End of post routes

router.delete('/:userId', (req, res, next) => {
  User.remove({_id: req.params.userId})
  .exec()
  .then(result => {
    res.status(200).json({
      message: 'Your user information has been removed from our records'
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
  //end of promise

})


module.exports = router;
