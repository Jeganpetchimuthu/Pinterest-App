const mongoose = require("mongoose");

const chickenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const chicken = mongoose.model("chicken", chickenSchema);

module.exports = chicken;
