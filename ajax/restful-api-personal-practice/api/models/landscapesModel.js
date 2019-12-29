const mongoose = require('mongoose');

const locationsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  address: {type: String, required: true},
  description: {type: String, required: true}
}, {collection: 'locations'});

module.exports = mongoose.model('Location', locationsSchema)
