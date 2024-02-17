const mongoose = require("mongoose");

const christmasSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const christmas = mongoose.model("christmas", christmasSchema);

module.exports = christmas;
