// models/godQuotesModel.js
const mongoose = require('mongoose');

const godQuotesSchema = new mongoose.Schema({
  name: String,
  imageData: String,
  contentType: String,
});

const GodQuotes = mongoose.model('godQuotes', godQuotesSchema);

module.exports = GodQuotes;
