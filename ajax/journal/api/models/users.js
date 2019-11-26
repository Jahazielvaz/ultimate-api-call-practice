const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String
}, {collection: 'registration'})

module.exports = mongoose.model('Registration', userSchema)
