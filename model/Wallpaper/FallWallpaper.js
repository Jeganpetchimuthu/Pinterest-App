const mongoose = require("mongoose");

const fallSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const falls = mongoose.model("falls", fallSchema);

module.exports = falls;
