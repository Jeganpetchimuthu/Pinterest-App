const mongoose = require("mongoose");

const frameWorkSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const frameWork = mongoose.model("frameWork", frameWorkSchema);

module.exports = frameWork;
