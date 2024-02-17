const mongoose = require("mongoose");

const foodPlatingSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const foodPlating = mongoose.model("foodPlating", foodPlatingSchema);

module.exports = foodPlating;
