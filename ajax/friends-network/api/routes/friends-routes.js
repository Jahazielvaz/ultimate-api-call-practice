const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Friend = require('../models/friends-model');

router.get('/', (req, res, next) => {
  Friend.find()
  .exec()
  .then(result => {
    if(result.length < 1){
      res.status(404).json({
        message: 'No friends found in your list. Please add new ones!'
      })
    }

    res.status(200).json({
      message: 'Here\'s your list of friends ',
      list: result
    });
  })
  .catch(err => {
    res.status(500).json({error: err});
  })
});

router.post('/', (req, res, next) => {
  const friends = new Friend({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    password: req.body.password
  })

  friends.save()
  .then(result => {
    res.status(201).json({
      message: 'New user has been posted',
      user: result
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

router.patch('/:friendId', (req, res, next) => {
  const id = req.params.friendId;
  Friend.update({_id: id}, {$set: req.body})
  .then(result => {
    res.status(200).json({
      message: 'Your friend has been updated',
      result: result
    });
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
});




module.exports = router;
