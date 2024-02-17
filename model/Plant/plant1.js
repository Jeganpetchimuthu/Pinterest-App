const mongoose = require("mongoose");

const plant1Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant1 = mongoose.model("plant1", plant1Schema);

module.exports = plant1;
