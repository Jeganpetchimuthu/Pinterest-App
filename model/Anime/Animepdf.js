const mongoose = require("mongoose");

const animepdfSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const animepdf = mongoose.model("animepdf", animepdfSchema);

module.exports = animepdf;
