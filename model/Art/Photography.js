const mongoose = require("mongoose");

const photographySchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const photography = mongoose.model("photography", photographySchema);

module.exports = photography;
