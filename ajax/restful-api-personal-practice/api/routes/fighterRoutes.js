const express = require('express');
const router = express.Router();
const Fighters = require('../models/fighterModel');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  res.status(200).json({message: 'Heres a list of all the fighters'});
});

router.post('/', (req, res, next) => {
  const newFighter = new Fighters({
    _id: mongoose.Types.ObjectId,
    name: req.body.name,
    powerLevel: req.body.powerlevel
  })

  res.status(201).json({message: 'Fighter has been posted', newFighter});
});

router.get('/:fighterId', (req, res, next) => {
  res.status(200).json({message: 'Heres your fighter'});
});

router.patch('/:fighterId', (req, res, next) => {
  res.status(200).json({message: 'Fighter has been updated'});
});

router.delete('/:fighterId', (req, res, next) => {
  res.status(200).json({message: 'Fighter has been deleted'})
})

module.exports = router;
