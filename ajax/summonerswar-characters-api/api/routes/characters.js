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
  .then((result) => {
    if(req.fresh){
      console.log('This is a fresh new request')
    } else {
      console.log(`The request for Character ${result.name} has been made`)
    }

    console.log(req.ip)
    res.status(201)
    .json({
      message: 'Congratulations. Your character has been posted',
      character: result
    })
  })
  .catch((err) => {
    console.log(err)
    res.status(500)
    .json(err)
  })
})



module.exports = router;
