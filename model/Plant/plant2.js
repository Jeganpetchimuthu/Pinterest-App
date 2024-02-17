const mongoose = require("mongoose");

const plant2Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant2 = mongoose.model("plant2", plant2Schema);

module.exports = plant2;
