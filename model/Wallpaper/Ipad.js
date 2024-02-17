const mongoose = require("mongoose");

const ipadSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const ipad = mongoose.model("ipad", ipadSchema);

module.exports = ipad;
