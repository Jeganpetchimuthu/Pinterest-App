const mongoose = require("mongoose");

const womenartSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const womenArt = mongoose.model("womenArt", womenartSchema);

module.exports = womenArt;
