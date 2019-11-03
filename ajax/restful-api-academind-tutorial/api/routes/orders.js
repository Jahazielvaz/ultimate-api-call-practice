const express = require('express'),
router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Your order has been submitted'
  })
})




module.exports = router;
