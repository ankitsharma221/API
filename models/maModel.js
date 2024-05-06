const mongoose = require('mongoose');

// Define your schema
const MaSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const Ma = mongoose.model('Ma', MaSchema, 'ma');

module.exports = Ma;