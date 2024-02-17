const mongoose = require("mongoose");

const mountSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const mount = mongoose.model("mount", mountSchema);

module.exports = mount;
