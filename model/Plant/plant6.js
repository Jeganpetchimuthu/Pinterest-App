const mongoose = require("mongoose");

const plant6Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant6 = mongoose.model("plant6", plant6Schema);

module.exports = plant6;
