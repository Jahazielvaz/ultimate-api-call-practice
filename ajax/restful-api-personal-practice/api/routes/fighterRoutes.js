const express = require('express');
const router = express.Router();
const Fighters = require('../models/fighterModel');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  res.status(200).json({message: 'Heres a list of all the fighters'});
});

router.post('/', (req, res, next) => {
  const newFighter = new Fighters({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    powerLevel: req.body.powerLevel
  })

  newFighter.save()
  .then(data => {
    console.log(data)
    res.status(201).json({message: 'Fighter has been posted', data});
  })
  .catch(err => {
    res.status(500).json({
      error: {
        message: err
      }
    })
  })
});

router.get('/:fighterId', (req, res, next) => {
  const id = req.params.fighterId;
  Fighters.findById(id)
  .exec()
  .then((data) => {
    res.status(200)
    .json(data)
  })
  .catch(err => {
    console.log(err)
    res.status(500)
    .json({error:{
      error: err
    }})
  })
});

router.patch('/:fighterId', (req, res, next) => {
  res.status(200).json({message: 'Fighter has been updated'});
});

router.delete('/:fighterId', (req, res, next) => {
  res.status(200).json({message: 'Fighter has been deleted'})
})

module.exports = router;
