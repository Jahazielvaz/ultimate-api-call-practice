const express = require('express'),
mongoose = require('mongoose'),
router = express.Router();

Registration = require('../models/users');


// router.get('/', (req, res, next) => {
//   res.status(200).json({
//     message: 'This route will allow us to access all users'
//   })
// })

router.post('/', (req, res, next) => {

  const registration = new Registration({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  registration.save().then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  res.status(201).json({
    message: "Your profile has been successfully created",
    info: registration
  })
})







module.exports = router;
