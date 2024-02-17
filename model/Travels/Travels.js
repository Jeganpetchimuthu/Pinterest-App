const mongoose = require("mongoose");

const TravelsSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Travels = mongoose.model("Travels", TravelsSchema);

module.exports = Travels;
