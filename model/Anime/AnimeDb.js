const mongoose = require("mongoose");

const animedbSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const animedb = mongoose.model("animeDb", animedbSchema);

module.exports = animedb;
