/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DreamSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  motif: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dream = mongoose.model("dream", DreamSchema);
