const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');

const Activity = require('../models/activitiesModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './imageUploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage});


router.post('/', upload.single('upload'), (req, res, next) => {
  const activity = new Activity({
    _id: mongoose.Types.ObjectId(),
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
  .catch(err => {
    res.status(500).json({error: err})
  })
})

module.exports = router;
