const express = require('express'),
router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Congratulations! You're now in the user routes"
  })
})

router.post('/:username', (req,res, next) => {
  res.status(201).json({
    message: `Congratulations! Your username ${req.params.username} has been posted`,
    username: req.params.username
  })
})





module.exports = router;
