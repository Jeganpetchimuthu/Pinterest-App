const mongoose = require("mongoose");

const animeMasterSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const animeMaster = mongoose.model("animeMaster", animeMasterSchema);

module.exports = animeMaster;
