const mongoose = require('mongoose');
// Define your schema
const GaneshSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const ganesh = mongoose.model('ganesh', GaneshSchema, 'ganesh');

module.exports = ganesh;