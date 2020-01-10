const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
// conf is optional: For example "dest" stands for destination
const upload = multer({dest: 'uploads/'});

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
          },
          postRequest: {
            url: 'http://localhost:3000/products',
            requiredProperties: 'name, price'
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

router.post('/', upload.single("productImage"), (req, res, next) => {
  console.log(req.file)
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })

  product.save()
  .then((result) => {
    res.status(201).json({
      message: 'Product has been posted',
      createdProduct: {
        _id: result._id,
        name: result.name,
        price: result.price
      },
      requestData: {
        type: 'GET',
        url: `http://localhost:3000/products/${result._id}`,
        fetchAllData: 'http://localhost:3000/products'
      }
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
  .select('name price _id')
  .exec()
  .then(doc => {
    console.log('from database', doc)
    if(doc){
      res.status(200).json({
        message: 'Product Request',
        doc,
        postRequest: {
          url: 'http://localhost:3000/products',
          requiredFields: 'name, price'
        }
      })
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
