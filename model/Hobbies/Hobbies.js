const mongoose = require("mongoose");

const hobbiesSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const hobbies = mongoose.model("hobbies", hobbiesSchema);

module.exports = hobbies;
