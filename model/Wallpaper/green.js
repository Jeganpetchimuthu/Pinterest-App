const mongoose = require("mongoose");

const greenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const green = mongoose.model("green", greenSchema);

module.exports = green;
