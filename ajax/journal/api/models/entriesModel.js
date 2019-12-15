const mongoose = require('mongoose');

const entriesSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Registration'},
  entry: {type: String, required: true},
  date: String
}, {collection: 'entries'});

module.exports = mongoose.model('Entries', entriesSchema);
