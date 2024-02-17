const mongoose = require("mongoose");

const adventureSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const adventure = mongoose.model("adventure", adventureSchema);

module.exports = adventure;
