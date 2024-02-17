const mongoose = require("mongoose");

const natureSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const nature = mongoose.model("nature", natureSchema);

module.exports = nature;
