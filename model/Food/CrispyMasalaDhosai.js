const mongoose = require("mongoose");

const crispyMasalaSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const crispyMasala = mongoose.model("crispyMasala", crispyMasalaSchema);

module.exports = crispyMasala;
