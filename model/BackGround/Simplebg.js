const mongoose = require("mongoose");

const simpleBgSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const simpleBg = mongoose.model("simpleBg", simpleBgSchema);

module.exports = simpleBg;
