const mongoose = require("mongoose");

const parkLaneSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const parkLane = mongoose.model("parkLane", parkLaneSchema);

module.exports = parkLane;
