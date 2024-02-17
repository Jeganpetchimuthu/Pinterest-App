const mongoose = require("mongoose");
const lionSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const lion = mongoose.model("lion", lionSchema);

module.exports = lion;
