const mongoose = require("mongoose");

const creativeDesignSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const creativeDesign = mongoose.model("creativeDesign", creativeDesignSchema);

module.exports = creativeDesign;
