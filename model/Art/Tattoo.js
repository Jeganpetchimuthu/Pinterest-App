const mongoose = require("mongoose");

const tattooSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const tattoo = mongoose.model("tattoo", tattooSchema);

module.exports = tattoo;
