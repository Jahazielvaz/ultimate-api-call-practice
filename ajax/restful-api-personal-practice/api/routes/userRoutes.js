const express = require('express'),
router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome of the users section'
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    username: req.body.username,
    password: req.body.password
  })
})




module.exports = router;
