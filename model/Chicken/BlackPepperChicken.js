const mongoose = require("mongoose");

const blackChickenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const blackChicken = mongoose.model("blackChicken", blackChickenSchema);

module.exports = blackChicken;
