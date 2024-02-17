const mongoose = require("mongoose");

const beachSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const beach = mongoose.model("beach", beachSchema);

module.exports = beach;
