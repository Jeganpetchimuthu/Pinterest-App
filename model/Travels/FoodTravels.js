const mongoose = require("mongoose");

const foodTravelsSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const foodTravels = mongoose.model("foodTravels", foodTravelsSchema);

module.exports = foodTravels;
