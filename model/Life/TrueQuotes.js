const mongoose = require("mongoose");

const trueQuotesSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const trueQuotes = mongoose.model("trueQuotes", trueQuotesSchema);

module.exports = trueQuotes;
