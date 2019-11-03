const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests for products route'
  })
})

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST requests for products route'
  })
})






module.exports = router;
