const mongoose = require("mongoose");

const ChickenTikkaSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const ChickenTikka = mongoose.model("ChickenTikka", ChickenTikkaSchema);

module.exports = ChickenTikka;
