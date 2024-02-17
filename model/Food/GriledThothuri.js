const mongoose = require("mongoose");

const grilSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const gril = mongoose.model("gril", grilSchema);

module.exports = gril;
