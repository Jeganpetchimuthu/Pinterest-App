const mongoose = require("mongoose");

const ChickenLolipopSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const ChickenLolipop = mongoose.model("ChickenLolipop", ChickenLolipopSchema);

module.exports = ChickenLolipop;
