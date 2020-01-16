const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const LocalEvent = require('../models/eventsModel');

router.get('/', (req, res, next) => {
  LocalEvent.find()
  .exec()
  .then(result => {
    res.status(200).json(result)
  })
  .catch(error => {res.status(500).json({error: error})})
})

router.post('/', (req, res, next) => {
  const localEvent = new LocalEvent({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    schedule: req.body.schedule,
    location: req.body.location
  })
  localEvent.save()
  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})




module.exports = router;
