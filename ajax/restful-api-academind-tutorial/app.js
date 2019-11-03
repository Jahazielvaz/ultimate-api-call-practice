let express = require('express'),
app = express();


// Routes
let productRoutes = require('./api/routes/products');

app.use('/products', productRoutes)





module.exports = app;
