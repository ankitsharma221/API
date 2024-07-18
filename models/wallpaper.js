const mongoose = require('mongoose');

const wallpaperSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Wallpaper = mongoose.model('Wallpaper', wallpaperSchema);

module.exports = Wallpaper;
