const express = require('express');
const router = express.Router();
const Fighters = require('../models/fighterModel');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  Fighters.find()
  .exec()
  .then((data) => {
    if(data){
      res.status(200).json(data);
    } else {
      res.status(404).json({message: 'Invalid Entry'});
    };
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: {
        error: err
      }
    });
  })
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
  const id = req.params.fighterId;
  const updateOps = {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  Fighters.update({_id: id},{$set: updateOps})
  .exec()
  .then(fighter => {
    res.status(201).json({
      message: 'Congratulations! Your fighter has been updated',
      fighter
    })
  })
  .catch(err => {
    res.status(500).json({Error: {error: err}})
  })
});

router.delete('/:fighterId', (req, res, next) => {
  const id = req.params.fighterId;
  Fighters.remove({_id: id})
  .exec()
  .then(data => {
    res.status(200).json({
      message: 'Fighter has been deleted',
      data
    });
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: {
        error: err
      }
    })
  })
})

module.exports = router;
