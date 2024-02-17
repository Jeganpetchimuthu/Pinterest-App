const mongoose = require("mongoose");

const premiumBgSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const premiumBg = mongoose.model("premiumBg", premiumBgSchema);

module.exports = premiumBg;
