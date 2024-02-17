const mongoose = require("mongoose");

const butterSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const butter = mongoose.model("butter", butterSchema);

module.exports = butter;
