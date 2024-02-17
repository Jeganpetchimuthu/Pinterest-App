const mongoose = require("mongoose");

const gardenPlantSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const gardenPlant = mongoose.model("gardenPlant", gardenPlantSchema);

module.exports = gardenPlant;
