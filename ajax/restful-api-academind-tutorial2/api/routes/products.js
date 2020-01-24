const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

// DB
Product = require('../models/product');

// Auth
const checkAuth = require('../auth/check_auth');

// conf is optional: For example "dest" stands for destination
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

// You can create your own custom file filter, like this one here.
const fileFilter = (req, file, cb) => {
  //cb null false is how you reject a file
  // NOTE: If you don't set null on true, it'll return with an error.
  // If you don't set null with false, it won't return an error, but it won't save the file.
  //cb null true is how you accept the file
  // if(file.mimetype === '*'){
  //   cb(null, true) //This will store the file
  // } else {
  //   cb(false);
  // }
  cb(null, true)
};

// The fileSize feature works in bytes. I believe that the first field, is the max width, the second one is the height, and the third one is the total amount of bytes that you're willing to allow from file.
const upload = multer({
  storage: storage,
  limits: {fileSize: 1025 * 1025 * 10},
  fileFilter: fileFilter

});

router.get('/', (req, res, next) => {
  Product.find()
  .select('name price _id productImage')
  .exec()
  .then((doc) => {
    const response = {
      count: doc.length,
      products: doc.map(info => {
        return {
          name: info.name,
          price: info.price,
          productImage: doc.productImage,
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

router.post('/', upload.single("productImage"), checkAuth, (req, res, next) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path
  })

  product.save()
  .then((result) => {
    res.status(201).json({
      message: 'Product has been posted',
      createdProduct: {
        _id: result._id,
        name: result.name,
        price: result.price,
        productImage: result.productImage
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
  .select('name price _id productImage')
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

router.delete('/', (req, res, next) => {
  Product.find()
  .remove()
  .then(response => {
    res.status(200).json({message: 'All content has been removed from our records'})
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
})



module.exports = router;
