const mongoose = require("mongoose");

const goodVibesSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const goodVibes = mongoose.model("goodVibes", goodVibesSchema);

module.exports = goodVibes;
