const mongoose = require("mongoose");

const plant11Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant11 = mongoose.model("plant11", plant11Schema);

module.exports = plant11;
