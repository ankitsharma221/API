const mongoose = require('mongoose');
// Define your schema
const HanumanSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const hanuman = mongoose.model('hanumanji', HanumanSchema, 'hanumanji');

module.exports = hanuman;