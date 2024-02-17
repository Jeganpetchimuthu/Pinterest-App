const mongoose = require("mongoose");

const ChickenCurrySchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const ChickenCurry = mongoose.model("ChickenCurry", ChickenCurrySchema);

module.exports = ChickenCurry;
