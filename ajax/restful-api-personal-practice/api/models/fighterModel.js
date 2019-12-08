const express = require('express');
const mongoose = require('mongoose');

const fighterSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  powerlever: { type: Number, required: true }
}, {collection: process.env.COLLECTION});

module.exports = mongoose.model('Fighters', fighterSchema)
