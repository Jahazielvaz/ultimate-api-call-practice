const express = require('express'),
router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Your order has been returned'
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Your order has been created'
  })
})

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Here are your order details',
    id: req.params.orderId
  })
})




module.exports = router;
