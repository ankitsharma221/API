const mongoose = require('mongoose');

const godQuotesSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const GodQuotes = mongoose.model('GodQuotes', godQuotesSchema);

module.exports = GodQuotes;
