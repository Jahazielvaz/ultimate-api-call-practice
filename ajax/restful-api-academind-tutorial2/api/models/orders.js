const mongoose = require('mongoose');

// Remember that the purpose of ref is to build a relation between models. The value for ref, should be the model you want to connect it with.
const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
  quantity: {type: Number, default: 1}
}, {collection:'orders'});

module.exports = mongoose.model('Order', orderSchema)
