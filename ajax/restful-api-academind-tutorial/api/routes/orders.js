const express = require('express'),
router = express.Router();
const bodyParser = require('body-parser');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Your order has been returned'
  })
})

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  }

  res.status(201).json({
    order: order,
    message: 'Your order has been created'
  })
})

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Here are your order details',
    id: req.params.orderId
  })
})

router.delete('/:orderId', (req,res, next) => {
  res.status(200).json({
    message: 'Order has been deleted'
  })
})




module.exports = router;
