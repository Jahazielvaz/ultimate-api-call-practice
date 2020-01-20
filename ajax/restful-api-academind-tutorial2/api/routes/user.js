const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require('../models/userModel');

router.post('/signup', (req, res, next) => {
  User.find({username: req.body.username})
  .exec()
  .then(user => {
    if(user.length >= 1){
      res.status(422).json({
        message: 'user name exists in our records'
      })
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          return res.status(500).json({
            error: err
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
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
        }
      }); //end of bcrypt section
    } //end of main else block
  })

})


module.exports = router;
