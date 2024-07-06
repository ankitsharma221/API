const mongoose = require('mongoose');

const wallpaperSchema = new mongoose.Schema({
  imageData: String,
  contentType: String
}, { collection: 'wallpaper' }); // Ensure this matches the name of your existing collection

module.exports = mongoose.model('wallpaper', wallpaperSchema);
