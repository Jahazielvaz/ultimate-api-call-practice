const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({message: 'Heres a list of all the fighters'});
});

router.post('/', (req, res, next) => {
  res.status(201).json({message: 'Fighter has been posted'});
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
