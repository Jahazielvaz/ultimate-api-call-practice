const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  password: {type: String, required: true}
}, {collection: 'list'});

module.exports = mongoose.model('Friend', friendSchema);
