const mongoose = require("mongoose");
const deerSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const deer = mongoose.model("deer", deerSchema);

module.exports = deer;
