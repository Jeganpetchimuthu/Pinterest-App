const mongoose = require("mongoose");

const plant12Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant12 = mongoose.model("plant12", plant12Schema);

module.exports = plant12;
