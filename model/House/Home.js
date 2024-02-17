const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const home = mongoose.model("Home", homeSchema);

module.exports = home;
