const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
// Define your schema
const SongSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  section: String,
  lyrics: [String], 
});

// Create a model from the schema
const Song = mongoose.model('Song', SongSchema, 'aarti');

module.exports = Song;

