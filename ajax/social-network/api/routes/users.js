const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/usersModel');
const error = require('./error');

router.post('/', (req, res, next) => {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password
  });

  user.save()
  .then(user => {
    res.status(201).json({
      message: 'Your username and password have been successfully stored in our records',
      user: user
    });

    console.log(user);
  })
  .catch(error)
});





module.exports = router;
