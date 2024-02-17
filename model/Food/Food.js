const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const food = mongoose.model("food", foodSchema);

module.exports = food;
