const mongoose = require("mongoose");
const oxSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const ox = mongoose.model("ox", oxSchema);

module.exports = ox;
