const mongoose = require("mongoose");

const chickenNoodleSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Noodle = mongoose.model("Noodle", chickenNoodleSchema);

module.exports = Noodle;
