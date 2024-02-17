const mongoose = require("mongoose");

const plant4Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant4 = mongoose.model("plant4", plant4Schema);

module.exports = plant4;
