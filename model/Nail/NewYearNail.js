const mongoose = require("mongoose");

const newYearSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const newYear = mongoose.model("newYear", newYearSchema);

module.exports = newYear;
