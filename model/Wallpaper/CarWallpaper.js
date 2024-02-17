const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const carWallpaper = mongoose.model("carWallpaper", carSchema);

module.exports = carWallpaper;
