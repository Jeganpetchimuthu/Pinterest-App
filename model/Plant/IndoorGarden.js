const mongoose = require("mongoose");

const indoorSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const indoor = mongoose.model("indoor", indoorSchema);

module.exports = indoor;
