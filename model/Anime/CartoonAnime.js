const mongoose = require("mongoose");

const animeCartoonSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const cartoon = mongoose.model("cartoon", animeCartoonSchema);

module.exports = cartoon;
