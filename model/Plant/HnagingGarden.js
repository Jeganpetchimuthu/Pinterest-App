const mongoose = require("mongoose");

const gardenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const garden = mongoose.model("garden", gardenSchema);

module.exports = garden;
