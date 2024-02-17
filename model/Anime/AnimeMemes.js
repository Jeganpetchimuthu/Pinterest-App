const mongoose = require("mongoose");

const animeMemesSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const animeMemes = mongoose.model("animeMemes", animeMemesSchema);

module.exports = animeMemes;
