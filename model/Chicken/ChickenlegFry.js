const mongoose = require("mongoose");

const ChickenLegFrySchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const ChickenLegFry = mongoose.model("ChickenLegFry", ChickenLegFrySchema);

module.exports = ChickenLegFry;
