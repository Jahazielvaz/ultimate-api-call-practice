const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const Activity = require("../models/activitiesModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './imageUploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});


const upload = multer({storage: storage});

router.post('/', upload.single('upload'), (req, res, next) => {
  const activity = new Activity({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    location: req.body.location,
    date: req.body.date
  });

  activity.save()
  .then(response => {
    res.status(201).json({
      message: "Your activity has been posted",
      activity: response
    })
  })
  .catch(err => {
    res.status(500).json({error: err})
  })

}) //End of post route


module.exports = router;
