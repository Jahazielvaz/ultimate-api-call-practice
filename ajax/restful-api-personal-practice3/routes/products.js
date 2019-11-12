const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const list = [
    {id: 1, name: 'Oraclescope', type: 'Telescope'},
    {id: 1, name: 'Cosmotracker', type: 'Star Tracker'},
    {id: 1, name: 'Hologium', type: 'Hologram'},
    {id: 1, name: 'Large Hadron Collider', type: 'Particle Accelerator'}

  ]
  res.status(200).json({
    message: "Welcome to the products section",
    products: list
  })
})

router.post('/', (req, res, next) => {
  const product = {
    id: req.body.id,
    name: req.body.name,
    type: req.body.type
  }

  res.status(201).json({
    message: 'Product has been successfully posted',
    product: product
  })
})

module.exports = router;
