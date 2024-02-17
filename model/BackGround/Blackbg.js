const mongoose = require("mongoose");

const blackbgSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const blackbg = mongoose.model("blackbg", blackbgSchema);

module.exports = blackbg;
