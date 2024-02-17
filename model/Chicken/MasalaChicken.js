const mongoose = require("mongoose");

const masalaChickenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const masalaChicken = mongoose.model("masalaChicken", masalaChickenSchema);

module.exports = masalaChicken;
