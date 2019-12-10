const express = require('express'),
mongoose = require('mongoose'),
router = express.Router();

Registration = require('../models/users');


router.get('/', (req, res, next) => {
  Registration.find()
  .exec()
  .then((data) => {
    res.status(200)
    .json(data)
  })
  .catch((err) => {
    res.status(500)
    .json({error: err})
  })
})

router.post('/', (req, res, next) => {

  const registration = new Registration({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  registration.save()
  .then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  res.status(201).json({
    message: "Your profile has been successfully created",
    info: registration
  })
})

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  Registration.findById(userId)
  .exec()
  .then((user) => {
    if(user){
      res.status(200).json(user)
      console.log(user)
    } else {
      res.status(404).json({message: "User Not Found"})
    }
  })
  .catch(err => {res.status(500).json({Error: {error: err}})})
})

router.patch('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  const userUpdateFiltering = {}
  for(const updater of req.body){
    userUpdateFiltering[updater] = updater.value
  }

  Registration.update({_id: userId}, {$set: userUpdateFiltering})
  .exec()
  .then((newUser) => {
    res.status(201).json({message: `Congratulations. Your name has been updated to`,
        newUser
    })
  })
  .catch((err) => {
    res.status(500).json({Error: err})
  })
})







module.exports = router;
