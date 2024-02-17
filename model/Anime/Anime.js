const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const anime = mongoose.model("anime", animeSchema);

module.exports = anime;
