const mongoose = require("mongoose");

const colourStoneSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const colourStone = mongoose.model("colourStone", colourStoneSchema);

module.exports = colourStone;
