const mongoose = require("mongoose");

const tropicalSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const tropicalWallpaper = mongoose.model("tropicalWallpaper", tropicalSchema);

module.exports = tropicalWallpaper;
