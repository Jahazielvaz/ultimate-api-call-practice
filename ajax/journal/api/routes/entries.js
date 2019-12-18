const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Entry = require('../models/entriesModel');
const Registration = require('../models/users');

// Getting all entries that exist
router.get('/',(req, res, next) => {
  Entry.find()
  .exec()
  .then(result => {
    res.status(200).json({
      data: result,
      request: {
        message: 'How to post an entry',
        url: 'localhost:3000/entries',
        body: {
          userId: 'Number',
          entry: 'String',
          date: 'String'
        }
      }
    }) //End of res

  }) //End of then
  .catch(err => {
    res.status(500).json({
      error : {message: err}
    })
  })
}) //End of get route

// Getting all entries from a single user
// router.get()

// Getting a single entry from a single user
// router.get()

// Posting a new entry
router.post('/', (req, res, next) => {
  Registration.findById(req.body.user)
  .exec()
  .then((result) => {
    const entries = new Entry({
      _id: mongoose.Types.ObjectId(),
      user: req.body.userId,
      entry: req.body.monkeys,
      date: req.body.date
    })

    return entries.save()
  }) // End of then block
  .then(entry => {
    res.status(201).json({
      entry: entry
    })
  })//End of then block
  .catch(err => {
    res.status(500).json({error: err})
  }) //End of catch

}) // End of post route

// Editing an existing entry
// router.patch()

// Deleting a single entry
// router.delete()

module.exports = router;
