const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Order has been fetched"
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "Order has been created"
  })
})


router.delete('/', (req, res, next) => {
  res.status(200).json({
    message: "Order has been created"
  })
})

module.exports = router;
