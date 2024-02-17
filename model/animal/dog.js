const mongoose = require("mongoose");
const dogSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const dog = mongoose.model("dog", dogSchema);

module.exports = dog;
