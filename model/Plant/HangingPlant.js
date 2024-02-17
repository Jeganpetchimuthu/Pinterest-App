const mongoose = require("mongoose");

const hangingPlantSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const hangingPlant = mongoose.model("hangingPlant", hangingPlantSchema);

module.exports = hangingPlant;
