const mongoose = require("mongoose");

const chilliChickenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const chilliChicken = mongoose.model("chilliChicken", chilliChickenSchema);

module.exports = chilliChicken;
