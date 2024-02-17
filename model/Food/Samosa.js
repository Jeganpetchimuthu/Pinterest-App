const mongoose = require("mongoose");

const samosaSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const samosa = mongoose.model("samosa", samosaSchema);

module.exports = samosa;
