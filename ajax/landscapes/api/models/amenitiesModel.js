const mongoose = require('mongoose');

const amenitiesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: {type: String, required: true},
  price: {type: Number, required: true}
}, {collection: 'amenities'});

module.exports = mongoose.model('Amenity', amenitiesSchema);
