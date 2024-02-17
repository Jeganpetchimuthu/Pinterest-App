const mongoose = require("mongoose");

const lightSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const light = mongoose.model("light", lightSchema);

module.exports = light;
