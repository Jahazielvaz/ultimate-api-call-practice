
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Characters = require('../models/charactersModel');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './characterUploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage})

router.get('/', (req, res, next) => {
  Characters.find()
  .exec()
  .then(response => {
    res.status(200).json({
      message: "Here's the list of all the characters that currently exist in the database",
      list: response
    })
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})

router.post('/', upload.single('characterImage'), (req, res, next) => {
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

router.delete('/:characterId', (req, res, next) => {
  Characters.remove({_id: req.params.characterId})
  .then(response => {
    res.status(200).json({
      message: "Your Character is no longer in our records",
      response: response
    })
  })
})





module.exports = router;
