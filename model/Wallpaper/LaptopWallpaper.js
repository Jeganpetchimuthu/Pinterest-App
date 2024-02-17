const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const laptop = mongoose.model("laptop", laptopSchema);

module.exports = laptop;
