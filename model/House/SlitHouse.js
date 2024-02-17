const mongoose = require("mongoose");

const slitHouseSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const slitHouse = mongoose.model("slitHouse", slitHouseSchema);

module.exports = slitHouse;
