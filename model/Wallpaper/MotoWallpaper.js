const mongoose = require("mongoose");

const motoSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const moto = mongoose.model("moto", motoSchema);

module.exports = moto;
