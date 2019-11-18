const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling get requests to /products'
  })

})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling post requests to /products'
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
