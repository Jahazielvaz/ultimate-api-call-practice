const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Entry = require('../models/entriesModel');

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
  const entries = new Entry({
    _id: mongoose.Types.ObjectId(),
    userId: req.body.userId,
    entry: req.body.entry,
    date: req.body.date
  })

  entries.save()
  .then((result) => {
    res.status(200).json({
      message: "entry has been posted",
      entryObject: result,
      request: {
        url: 'localhost:3000/'
      }
    })
  })
  .catch()
})

// Editing an existing entry
// router.patch()

// Deleting a single entry
// router.delete()

module.exports = router;
