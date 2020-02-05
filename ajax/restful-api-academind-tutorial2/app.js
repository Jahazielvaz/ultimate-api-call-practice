const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
//
// // DB
const USER_NAME = 'imagineTech';
const DATABASE = 'restfulapi';
mongoose.connect(`mongodb+srv://imagineTech:${process.env.MONGO_ATLAS_PW}@start-xnmb4.mongodb.net/restfulapi?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err) => {
  console.log(err)
})

// CORS Handling
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//
//   if(req.method === 'OPTIONS'){
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, DELETE, POST');
//     return res.status(200).json({})
//   }
//    next()
// })

// Routes
// const productsRoute = require('./api/routes/products');
// const orderRoutes = require('./api/routes/order');
// const userRoutes = require('./api/routes/user');

// Requests
// app.use('/products', productsRoute);
// app.use('/orders', orderRoutes);
// app.use('/users', userRoutes);

// app.get('/', (req, res) => {
//   res.status(200).json({message: 'It works'})
// })



// Error Handling
// app.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = 404;
//   next(error)
//
// })

// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({error: {
//     message: error.message
//   }})
// })

module.exports = app;
