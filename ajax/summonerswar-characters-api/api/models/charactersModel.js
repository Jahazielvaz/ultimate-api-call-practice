const express = require('express');
const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  starLevel: {type: Number, required: true}
}, {collection: process.env.COLLECTION});

module.exports = mongoose.model('Characters', characterSchema);
