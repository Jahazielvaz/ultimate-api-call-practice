const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  schedule: Number,
  location: String
}, {collection: 'list'})

module.exports = mongoose.model('LocalEvent', eventSchema)
