const mongoose = require("mongoose");

const plant7Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const plant7 = mongoose.model("plant7", plant7Schema);

module.exports = plant7;
