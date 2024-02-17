const mongoose = require("mongoose");

const uniqueSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const unique = mongoose.model("unique", uniqueSchema);

module.exports = unique;
