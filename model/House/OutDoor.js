const mongoose = require("mongoose");

const outDoorSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const outDoor = mongoose.model("OutDoor", outDoorSchema);

module.exports = outDoor;
