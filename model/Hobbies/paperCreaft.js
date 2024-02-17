const mongoose = require("mongoose");

const paperCraftSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const paperCraft = mongoose.model("paperCraft", paperCraftSchema);

module.exports = paperCraft;
