const mongoose = require("mongoose");

const chickenManiaSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const chickenMania = mongoose.model("chickenMania", chickenManiaSchema);

module.exports = chickenMania;
