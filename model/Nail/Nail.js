const mongoose = require("mongoose");

const nailSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const nail = mongoose.model("nail", nailSchema);

module.exports = nail;
