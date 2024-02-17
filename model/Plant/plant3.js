const mongoose = require("mongoose");

const plant3Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant3 = mongoose.model("plant3", plant3Schema);

module.exports = plant3;
