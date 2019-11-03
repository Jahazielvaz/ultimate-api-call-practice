let express = require('express'),
app = express();



// Routes
let productRoutes = require('./api/routes/products');
let orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes)
app.use('/orders', orderRoutes);


module.exports = app;
