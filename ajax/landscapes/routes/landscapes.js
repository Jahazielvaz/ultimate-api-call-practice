const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/landscapesModel');

router.post('/', (req, res, next) => {
  const place = new Place({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    location: req.body.location,
    description: req.body.description
  })
  place.save()
  .then(result => {
    res.status(201).json({
      message: 'Your new spot is been posted',
      place: result
    })
  })
  .catch(err => {
    res.status(500).json({
      message: 'Error',
      error: err
    })
  })
})

// router.post('/', (req, res, next) => {
//   const product = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     price: req.body.price
//   });
//   product
//   .save()
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => console.log(err))
//   res.status(201).json({
//     message: "Your product has been posted",
//     createdProduct: product
//   })
//
// }) //End of post route

module.exports = router;
