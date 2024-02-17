const mongoose = require("mongoose");

const selfLoveSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const selfLove = mongoose.model("selfLove", selfLoveSchema);

module.exports = selfLove;
