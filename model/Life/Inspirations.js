const mongoose = require("mongoose");

const inspirationSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const inspiration = mongoose.model("inspiration", inspirationSchema);

module.exports = inspiration;
