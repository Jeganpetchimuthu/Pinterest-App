const mongoose = require("mongoose");

const darkAnimeSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const dark = mongoose.model("dark", darkAnimeSchema);

module.exports = dark;
