const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// DB
Product = require('../models/product');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling get requests to /products'
  })

})

router.post('/', (req, res, next) => {
  // const product = {
  //   name: req.body.name,
  //   price: req.body.price
  // }

  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })
  
  res.status(201).json({
    message: 'Handling post requests to /products',
    product: product
  })

})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if(id === 'special'){
    res.status(200).json({message: 'Congratulations! You found the special item!'})
  } else {
    res.status(200).json({message: id})
  }
})

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Product updated successfully'
  })
})

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Product has been deleted'
  })
})



module.exports = router;
