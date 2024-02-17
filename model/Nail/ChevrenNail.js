const mongoose = require("mongoose");

const chevrenNailSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const chevrenNail = mongoose.model("chevrenNail", chevrenNailSchema);

module.exports = chevrenNail;
