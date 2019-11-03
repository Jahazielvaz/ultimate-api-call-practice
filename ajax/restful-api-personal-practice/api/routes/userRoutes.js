const express = require('express'),
router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome of the users section'
  })
})




module.exports = router;
