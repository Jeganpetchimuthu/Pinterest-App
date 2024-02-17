const mongoose = require("mongoose");

const monkeySchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const monkey = mongoose.model("monkey", monkeySchema);

module.exports = monkey;
