const mongoose = require("mongoose");

const chickenChilliSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const chilliChiken = mongoose.model("chilliChicken", chickenChilliSchema);

module.exports = chilliChiken;
