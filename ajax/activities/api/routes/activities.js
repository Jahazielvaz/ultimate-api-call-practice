const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');

const Activity = require('../models/activitiesModel');


router.post('/', (req, res, next) => {
  const activity = new Activity({
    _id: mongoose.Types.ObjectId,
    name: req.body.name,
    location: req.body.location
  })

  activity.save()
  .then(response => {
    res.status(201).json({
      message: 'Congratulations! Your activity has been posted to our records.',
      activity: response
    })
  })
})
