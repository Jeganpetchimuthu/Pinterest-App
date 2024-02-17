const mongoose = require("mongoose");

const lifeLessionSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const lifeLession = mongoose.model("lifeLession", lifeLessionSchema);

module.exports = lifeLession;
