const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: STRING, required: true},
  landscape: {type: mongoose.Schema.Types.ObjectId, ref: 'Landscape', required: true},
  countryDescription: {type: STRING, required: true}
}, {collection: 'countries'});

module.exports = mongoose.model('Country', countrySchema);
