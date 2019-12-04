
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Characters = require('../models/charactersModel');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'It works'
  })
})

router.post('/', (req, res, next) => {
  const characters = new Characters({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    starLevel: req.body.starLevel
  });

  characters.save()
  .then((result) => {
    res.status(201).json({
      message: 'Your character has been posted',
      character: result
    });
  })
  .catch((error) => {
    res.status(404).json({
      message: `${error} Not Found`
    });
  });
});








module.exports = router;
