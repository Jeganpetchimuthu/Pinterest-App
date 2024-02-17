const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const flower = mongoose.model("flower", flowerSchema);

module.exports = flower;
