const mongoose = require("mongoose");

const lifeSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const life = mongoose.model("life", lifeSchema);

module.exports = life;
