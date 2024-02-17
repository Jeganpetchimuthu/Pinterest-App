const mongoose = require("mongoose");

const styleFoodSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const styleFood = mongoose.model("styleFood", styleFoodSchema);

module.exports = styleFood;
