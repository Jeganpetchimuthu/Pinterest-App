const mongoose = require("mongoose");

const deerSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const deer = mongoose.model("deer", deerSchema);

module.exports = deer;

const deersSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const deers = mongoose.model("deers", deersSchema);

module.exports = deers;
