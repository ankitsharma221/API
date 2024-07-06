const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageName: String,
  imageData: String
});

const Image = mongoose.model('Image', imageSchema, 'wallpaper');

module.exports = Image;
