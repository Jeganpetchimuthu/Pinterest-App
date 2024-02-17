const mongoose = require("mongoose");

const plant9Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant9 = mongoose.model("plant9", plant9Schema);

module.exports = plant9;
