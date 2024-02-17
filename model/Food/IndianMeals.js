const mongoose = require("mongoose");

const indianMealsSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const meals = mongoose.model("meals", indianMealsSchema);

module.exports = meals;
