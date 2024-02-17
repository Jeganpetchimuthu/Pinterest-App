const mongoose = require("mongoose");
const tigerSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const tiger = mongoose.model("tiger", tigerSchema);

module.exports = tiger;
