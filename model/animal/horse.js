const mongoose = require("mongoose");

const horseSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const horse = mongoose.model("horse", horseSchema);

module.exports = horse;
