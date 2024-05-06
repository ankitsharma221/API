const mongoose = require('mongoose');
// Define your schema
const TitleSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const title = mongoose.model('title', TitleSchema, 'chalisa');

module.exports = title;