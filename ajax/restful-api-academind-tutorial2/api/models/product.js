const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
}, {collection: 'souveniers'})

// Note that the mongoose.model takes 2 arguments. The first one is the name that you want to give the model, and the second is the name of the schema, which in this is case is productSchema
module.exports = mongoose.model('Product', productSchema)
