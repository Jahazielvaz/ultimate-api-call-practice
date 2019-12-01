const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  starLevel: Number
}, {collection: process.env.COLLECTION})

module.exports = mongoose.model('Characters', characterSchema)
