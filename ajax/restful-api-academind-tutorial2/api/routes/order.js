const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/orders');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Order.find()
  .select('_id product quantity')
  .exec()
  .then(result => {
    res.status(200).json({
      count: result.length,
      orders: result.map(order => {
        return {
          id: order._id,
          product: order.product,
          quantity: order.quantity,
          request: {
            type: 'GET',
            url: `http://localhost:3000/orders/${order._id}`
          }
        }
      })

    })
  })
  .catch(err => {
    res.status(500).json({error: {error: err}})
  })
})

router.post('/', (req, res, next) => {
  Product.findById(req.body.productId)
  .then(product => {
    if(!product){
      res.status(404).json({message: 'Product Not Found!'})
    }
    const order = new Order({
      _id: mongoose.Types.ObjectId(),
      quantity: req.body.quantity,
      product: req.body.productId
    })
    return order.save()
  })
  .then(result => {
    res.status(201).json({
      message: 'Order has been created',
      details: {
        _id: result._id,
        product: result.product,
        quantity: result.quantity
      },
      viewOrders: {
        type: 'GET',
        url: 'http://localhost:3000/orders'
      }
    })
  })
  .catch(err => {
    res.status(500).json({
      message: 'Product Not Found',
      error: err
    })
  }) //End of catch
})

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "Here is your order",
    id: req.params.orderId
  })
})


router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "Order has been deleted",
    id: req.params.orderId
  })
})

module.exports = router;
