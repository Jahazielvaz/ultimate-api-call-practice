
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

router.get('/:characterId', (req, res, next) => {
  const characterId = req.params.characterId;
  Characters.findById(characterId)
  .exec()
  .then((result) => {
    console.log(`Congratulations! You have summoned ${result}`);
    res.status(200).json(result)
  })
  .catch((err) => {
    res.status(404).json({
      message: 'That Id does not exist'
    });
  });
});

router.patch('/:characterId', (req, res, next) => {
  const id = req.body.characterId;
  Characters.update({_id: id}, {$set: {name: req.body.name}})
})





module.exports = router;
