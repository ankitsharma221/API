const mongoose = require('mongoose');
// Define your schema
const RamSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const ram = mongoose.model('Ram', RamSchema, 'ram');

module.exports = ram;