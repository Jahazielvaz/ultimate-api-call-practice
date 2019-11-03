const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests for products route'
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST requests for products route'
  })
})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;

  if(id === 'special'){
    res.status(200).json({
      message: 'Congratulations! You have discovered a special item',
      id: id
    })
  } else {
    res.status(200).json({
      message: 'You have passed an id',
      id: id
    })
  }
})

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product successfully'
  })
})

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product successfully'
  })
})





module.exports = router;
