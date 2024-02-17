const mongoose = require("mongoose");

const freeNightSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const freeNight = mongoose.model("freeNight", freeNightSchema);

module.exports = freeNight;
