const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Entries = require('../models/entriesModel');

// Getting all entries that exist
router.get((req, res, next) => {
  Entries.find()
  .exec()
  .then(result => {
    res.status(200).json({
      data: result,
      request: {
        message: 'How to post an entry',
        url: 'localhost:3000/entries',
        body: {
          userId: Number,
          entry: String,
          date: String
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
// router.post()

// Editing an existing entry
// router.patch()

// Deleting a single entry
// router.delete()

module.exports = router;
