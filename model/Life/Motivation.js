const mongoose = require("mongoose");

const motivationSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const motivation = mongoose.model("motivation", motivationSchema);

module.exports = motivation;
