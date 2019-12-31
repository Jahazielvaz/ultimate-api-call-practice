const mongoose = require('mongoose');

const landscapeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  location: {type: String, required: true},
  description: {type: String, required: true}
}, {collection: 'locations'});

module.exports = mongoose.model('Place', landscapeSchema);
