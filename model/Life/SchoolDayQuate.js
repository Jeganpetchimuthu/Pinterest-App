const mongoose = require("mongoose");

const schoolDaySchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const schoolDay = mongoose.model("schoolDay", schoolDaySchema);

module.exports = schoolDay;
