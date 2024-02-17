const mongoose = require("mongoose");

const rosebgSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const rosebg = mongoose.model("rosebg", rosebgSchema);

module.exports = rosebg;
