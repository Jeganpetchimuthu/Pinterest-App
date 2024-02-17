const mongoose = require("mongoose");

const seaSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const seaWallpaper = mongoose.model("seaWallpaper", seaSchema);

module.exports = seaWallpaper;
