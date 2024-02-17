const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const roomDecor = mongoose.model("roomDecor", roomSchema);

module.exports = roomDecor;
