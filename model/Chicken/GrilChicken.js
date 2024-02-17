const mongoose = require("mongoose");

const GrillChickenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const GrillChicken = mongoose.model("GrillChicken", GrillChickenSchema);

module.exports = GrillChicken;
