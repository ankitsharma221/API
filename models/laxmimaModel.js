const mongoose = require('mongoose');

// Define your schema
const laxmiSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const laxmi = mongoose.model('laxmi', laxmiSchema, 'laxmima');

module.exports = laxmi;