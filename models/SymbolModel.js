/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SymbolSchema = new Schema({
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
  }
});

module.exports = Symbol = mongoose.model("symbol", SymbolSchema);
