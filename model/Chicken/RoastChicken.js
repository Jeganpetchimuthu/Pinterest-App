const mongoose = require("mongoose");

const RoastChickenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const RoastChicken = mongoose.model("RoastChicken", RoastChickenSchema);

module.exports = RoastChicken;
