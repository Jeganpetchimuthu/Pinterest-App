const mongoose = require("mongoose");

const homeDesignSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const HomeDesign = mongoose.model("HomeDesign", homeDesignSchema);

module.exports = HomeDesign;
