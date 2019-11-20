const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// DB
Product = require('../models/product');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling get requests to /products'
  });

});

router.post('/', (req, res, next) => {

  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })

  product.save().then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  res.status(201).json({
    message: 'Handling post requests to /products',
    createdProduct: product
  });

});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
  .exec()
  .then(doc => {
    console.log(doc)
    res.status(200).json(doc)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({error: error})
  })
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Product updated successfully'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Product has been deleted'
  });
});



module.exports = router;
