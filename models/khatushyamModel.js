const mongoose = require('mongoose');
// Define your schema
const KhatuSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const khatu = mongoose.model('khatu', KhatuSchema, 'khatuShyam');

module.exports = khatu;