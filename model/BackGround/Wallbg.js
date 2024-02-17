const mongoose = require("mongoose");

const freeWallSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const wall = mongoose.model("wall", freeWallSchema);

module.exports = wall;
