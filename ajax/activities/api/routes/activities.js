const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const router = express.Router();

const Activity = require('../models/activitiesModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './imageUploads')
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const filter = (req, file, cb) => {
  if(file.mimetype === 'png'){
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const uploads = multer({
  storage: storage,
  limits: {filesize: 1400 * 1400 * .4},
  filter: filter
})

router.post('/', uploads.single('fileUpload'), (req, res, next) => {
  const activity = new Activity({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    location: req.body.location,
    date: req.body.date
  });

  activity.save()
  .then(response => {
    res.status(201).json({
      message: 'Your activity has been posted to our records',
      activity: response
    });
  })
  .catch(err => {
    res.status(500).json({error: err})
  })

  console.log(req.file)
});

module.exports = router;
