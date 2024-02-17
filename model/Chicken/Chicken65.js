const mongoose = require("mongoose");

const Chicken65Schema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Chicken65 = mongoose.model("Chicken65", Chicken65Schema);

module.exports = Chicken65;
