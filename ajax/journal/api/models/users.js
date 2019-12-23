const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String
  // entries: {type: mongoose.Schema.Types.ObjectId, ref: 'Entries'}
}, {collection: 'registration'});

module.exports = mongoose.model('Registration', userSchema)
