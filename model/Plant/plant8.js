const mongoose = require("mongoose");

const plant8Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant8 = mongoose.model("plant8", plant8Schema);

module.exports = plant8;
