const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')

// APP MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

// DB
mongoose.connect(`mongodb+srv://imagineTech:${process.env.PASSWORD}@start-xnmb4.mongodb.net/Activities?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// CORS HANDLING
app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorizaton')

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT')
    return res.status(200).json({})
  }

  next()
})

// ROUTE MIDDLEWARE
const eventRoutes = require('./api/routes/events')

app.use('/events', eventRoutes)




app.get('/*', (req, res, next) => {
  res.status(200).json({message: "WRONG"})

  next()
})

app.get('/', (req, res, next) => {
  res.status(200).json({message: "It works"})
})


module.exports = app
