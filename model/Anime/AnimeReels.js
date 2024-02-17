const mongoose = require("mongoose");

const animereelsSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const animeReel = mongoose.model("animeReel", animereelsSchema);

module.exports = animeReel;
