const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Activity = require('../models/activitiesModel');

router.post('/', (req, res, next) => {
  const activity = new Activity({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    location: req.body.location,
    date: req.body.date
  });

  activity.save()
  .then(response => {
    res.status(201).json({
      message: 'Your activity has been posted',
      activity: response
    })
  })
  .catch(error => {
    res.status(500).json({error: error})
  })
  // End of promise

}); //End of post route

module.exports = router;
