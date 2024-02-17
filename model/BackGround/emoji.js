const mongoose = require("mongoose");

const emojiSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const emoji = mongoose.model("emoji", emojiSchema);

module.exports = emoji;
