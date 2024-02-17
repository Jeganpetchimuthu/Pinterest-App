const mongoose = require("mongoose");

const iphoneSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const iphoneWallpaper = mongoose.model("iphoneWallpaper", iphoneSchema);

module.exports = iphoneWallpaper;
