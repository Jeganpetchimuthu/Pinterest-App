const mongoose = require("mongoose");

const appleSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const appleImage = mongoose.model("appleImage", appleSchema);

module.exports = appleImage;
