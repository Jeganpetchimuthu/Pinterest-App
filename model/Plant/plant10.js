const mongoose = require("mongoose");

const plant10Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant10 = mongoose.model("plant10", plant10Schema);

module.exports = plant10;
