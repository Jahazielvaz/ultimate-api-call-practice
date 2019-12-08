const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// DB
Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.find()
  .select('name price _id')
  .exec()
  .then((doc) => {
    const response = {
      count: doc.length,
      products: doc.map(info => {
        return {
          name: info.name,
          price: info.price,
          id: info._id,
          request: {
            type: 'GET',
            url: `http://localhost:3000/products/${info._id}`
          }
        }
      })
    }
    res.status(200).json(response)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  });

});

router.post('/', (req, res, next) => {

  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })

  product.save()
  .then((result) => {
    console.log(result)
    res.status(201).json({
      message: 'Handling post requests to /products',
      createdProduct: product
    });
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json(error)
  })

});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
  .exec()
  .then(doc => {
    console.log('from database', doc)
    if(doc){
      res.status(200).json(doc)
    } else {
      res.status(404).json({message: "Such ID does not exist in our records"})
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({error: error})
  })
});

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  Product.update({_id: id}, {$set: updateOps})
  .exec()
  .then(result => {
    console.log(result);
    res.status(200).json(result)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err})
  });
});

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.remove({_id: id})
  .exec()
  .then((result) => {
    res.status(200).json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
});



module.exports = router;
