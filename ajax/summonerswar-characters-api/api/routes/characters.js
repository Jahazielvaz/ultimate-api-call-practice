const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Characters = require('../models/charactersModel');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'It works'
  })
})

router.post('/', (req, res, next) => {
  const character = new Characters({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    starLevel: req.body.starLevel
  })


  character.save()
  res.status(201).json({
    message: 'Congratulations. Your character has been added',
    info: character
  })
})



module.exports = router;
