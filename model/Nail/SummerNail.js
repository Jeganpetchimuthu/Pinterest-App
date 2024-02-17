const mongoose = require("mongoose");

const summerSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const summer = mongoose.model("summer", summerSchema);

module.exports = summer;
