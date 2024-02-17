const mongoose = require("mongoose");

const autumnSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const autumn = mongoose.model("autumn", autumnSchema);

module.exports = autumn;
