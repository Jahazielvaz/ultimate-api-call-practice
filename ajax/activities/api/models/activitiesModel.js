const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  location: String,
  date: String
}, {collection: 'list'});

module.exports = mongoose.model('Activity', activitySchema);
