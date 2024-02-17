const mongoose = require("mongoose");

const chickenKathiSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const chickenKathi = mongoose.model("chickenKathi", chickenKathiSchema);

module.exports = chickenKathi;
