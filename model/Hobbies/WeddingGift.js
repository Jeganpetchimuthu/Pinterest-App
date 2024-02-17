const mongoose = require("mongoose");

const weddingSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const wedding = mongoose.model("wedding", weddingSchema);

module.exports = wedding;
