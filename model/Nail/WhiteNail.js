const mongoose = require("mongoose");

const whiteSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const whiteNail = mongoose.model("whiteNail", whiteSchema);

module.exports = whiteNail;
