const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const animal = mongoose.model("animal", animalSchema);

module.exports = animal;
