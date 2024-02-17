const mongoose = require("mongoose");

const redbgSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const redbg = mongoose.model("redbg", redbgSchema);

module.exports = redbg;
