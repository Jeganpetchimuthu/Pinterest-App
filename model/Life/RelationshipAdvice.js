const mongoose = require("mongoose");

const relationshipAdviceSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const relationshipAdvice = mongoose.model(
  "relationshipAdvice",
  relationshipAdviceSchema
);

module.exports = relationshipAdvice;
