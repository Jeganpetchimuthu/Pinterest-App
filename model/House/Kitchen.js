const mongoose = require("mongoose");

const kitchenSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const kitchen = mongoose.model("kitchen", kitchenSchema);

module.exports = kitchen;
