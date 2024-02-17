const mongoose = require("mongoose");

const housePlantSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const housePlant = mongoose.model("housePlant", housePlantSchema);

module.exports = housePlant;
