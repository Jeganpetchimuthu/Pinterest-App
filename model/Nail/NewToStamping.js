const mongoose = require("mongoose");

const newStampingSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const stampingNail = mongoose.model("stampingNail", newStampingSchema);

module.exports = stampingNail;
