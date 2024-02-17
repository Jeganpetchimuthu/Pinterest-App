const mongoose = require("mongoose");

const positiveThinkSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const positiveThink = mongoose.model("positiveThink", positiveThinkSchema);

module.exports = positiveThink;
