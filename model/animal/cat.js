const mongoose = require("mongoose");
const catSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const cat = mongoose.model("cat", catSchema);

module.exports = cat;
