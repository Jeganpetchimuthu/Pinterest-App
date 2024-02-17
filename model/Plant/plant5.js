const mongoose = require("mongoose");

const plant5Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant5 = mongoose.model("plant5", plant5Schema);

module.exports = plant5;
