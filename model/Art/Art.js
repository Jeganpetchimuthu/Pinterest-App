const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const art = mongoose.model("art", artSchema);

module.exports = art;
