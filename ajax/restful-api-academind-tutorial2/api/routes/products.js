const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const multer = require('multer');
//
// // DB
// Product = require('../models/product');
//
// // Auth
// const checkAuth = require('../auth/check_auth');
//
// // conf is optional: For example "dest" stands for destination
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + file.originalname)
//   }
// })
//
// // You can create your own custom file filter, like this one here.
// const fileFilter = (req, file, cb) => {
//   // cb null false is how you reject a file
//   // NOTE: If you don't set null on true, it'll return with an error.
//   // If you don't set null with false, it won't return an error, but it won't save the file.
//   // cb null true is how you accept the file
//   if(file.mimetype === 'jpeg' || 'png'){
//     cb(null, true) //This will store the file
//   } else {
//     cb(false);
//   }
// };
//
// // The fileSize feature works in bytes. I believe that the first field, is the max width, the second one is the height, and the third one is the total amount of bytes that you're willing to allow from file.
// const upload = multer({
//   storage: storage,
//   limits: {fileSize: 1025 * 1025 * 10},
//   fileFilter: fileFilter
// });
//
// router.get('/', (req, res, next) => {
//   Product.find()
//   .select('name price _id productImage')
//   .exec()
//   .then((doc) => {
//     const response = {
//       count: doc.length,
//       products: doc.map(info => {
//         return {
//           name: info.name,
//           price: info.price,
//           productImage: doc.productImage,
//           id: info._id,
//           request: {
//             type: 'GET',
//             url: `http://localhost:3000/products/${info._id}`
//           },
//           postRequest: {
//             url: 'http://localhost:3000/products',
//             requiredProperties: 'name, price'
//           }
//         }
//       })
//     }
//     res.status(200).json(response)
//   })
//   .catch((err) => {
//     console.log(err)
//     res.status(500).json({
//       error: err
//     })
//   });
//
// });
//
// router.post('/', checkAuth, upload.single('imageUpload'), (req, res, next) => {
//   const product = new Product({
//     _id: mongoose.Types.ObjectId(),
//     name: req.body.name,
//     price: req.body.price,
//     imageUpload: req.file.path
//   })
//
//   product.save()
//   .then(product => {
//     res.status(201).json({
//       message: 'Product posted successfully',
//       product: product
//     }); //End of status
//   })
//   .catch(err => {
//     res.status(500).json({error: err})
//   })
//
//
// })
//
// router.get('/:productId', (req, res, next) => {
//   const id = req.params.productId;
//   Product.findById(id)
//   .select('name price _id productImage')
//   .exec()
//   .then(doc => {
//     console.log('from database', doc)
//     if(doc){
//       res.status(200).json({
//         message: 'Product Request',
//         doc,
//         postRequest: {
//           url: 'http://localhost:3000/products',
//           requiredFields: 'name, price'
//         }
//       })
//     } else {
//       res.status(404).json({message: "Such ID does not exist in our records"})
//     }
//   })
//   .catch(error => {
//     console.log(error)
//     res.status(500).json({error: error})
//   })
// });
//
// router.patch('/:productId', checkAuth, (req, res, next) => {
//   const id = req.params.productId;
//   const updateOps = {};
//   // NOTE: For in loop; loops through property names, and for of loops through property values
//   for(const ops of req.body){
//     updateOps[ops.propName] = ops.value;
//   }
//   Product.update({_id: id}, {$set: updateOps})
//   .exec()
//   .then(result => {
//     console.log(result);
//     res.status(200).json(result)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({error: err})
//   });
// });
//
// router.delete('/:productId', checkAuth, (req, res, next) => {
//   const id = req.params.productId;
//   Product.remove({_id: req.params.productId})
//   .exec()
//   .then(product => {
//     if(!product){
//       return res.status(404).json({message: 'Product Not Found'});
//     }
//
//     res.status(200).json({
//       message: 'Product has been removed from our records',
//       data: product
//     })
//   }) //End of then promise
//   .catch(err => {
//     res.status(500).json({error: err});
//   }); //End of catch
//
// }); //End of delete route
//
// router.delete('/', checkAuth, (req, res, next) => {
//   Product.find()
//   .remove()
//   .then(response => {
//     res.status(200).json({message: 'All content has been removed from our records'})
//   })
//   .catch(err => {
//     res.status(500).json({error: err})
//   })
// })
//
//
//
module.exports = router;
