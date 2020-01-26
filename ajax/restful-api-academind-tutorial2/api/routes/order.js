const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/orders');
const Product = require('../models/product');
const checkAuth = require('../auth/check_auth');

router.get('/', checkAuth, (req, res, next) => {
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

router.post('/', checkAuth, (req, res, next) => {
  Product.findById(req.body.productId)
  .then(product => {
    if(!product){
      return res.status(404).json({message: 'Product Not Found!'})
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

router.get('/:orderId', checkAuth, (req, res, next) => {
  Order.findById(req.params.orderId)
  .exec()
  .then(order => {
    if(!order){
      return res.status(404).json({message: "Order Does Not Exist"})
    }
    res.status(200).json({
      order: order,
      request: {
        type: 'GET',
        url: 'localhost:3000/orders'
      }
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})


router.delete('/:orderId', checkAuth, (req, res, next) => {
  Order.remove({_id: req.params.orderId})
  .exec()
  .then(result => {
    if(!result){
      return res.status(404).json({message: 'Order Not Found'})
    }
    res.status(200).json({
      message: 'Your order has been deleted',
      order: result,
      request: {
        type: 'POST',
        url: 'localhost:3000/orders',
        body: {productId: "ID", quantity: "Number"}
      }
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router;
