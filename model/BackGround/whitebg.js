const mongoose = require("mongoose");

const whiteSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const whiteBackground = mongoose.model("whiteBackground", whiteSchema);

module.exports = whiteBackground;
