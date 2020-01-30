const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type:String, required: true },
  field: { type: String, required: true },
  networth: { type: Number, required: true },
  password: { type: String, required: true }
}, { collection: 'artist' });

module.exports = mongoose.model('Artist', artistSchema);
