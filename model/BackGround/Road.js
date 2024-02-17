const mongoose = require("mongoose");

const roadSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const road = mongoose.model("road", roadSchema);

module.exports = road;
