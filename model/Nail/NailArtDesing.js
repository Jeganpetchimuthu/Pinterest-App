const mongoose = require("mongoose");

const nailArtSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const nailArt = mongoose.model("nailArt", nailArtSchema);

module.exports = nailArt;
