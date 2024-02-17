const mongoose = require("mongoose");

const hutSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const hut = mongoose.model("Hut", hutSchema);

module.exports = hut;
