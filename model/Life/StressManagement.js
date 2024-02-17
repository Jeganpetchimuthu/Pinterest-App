const mongoose = require("mongoose");

const stressManageSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const stressManage = mongoose.model("stressManage", stressManageSchema);

module.exports = stressManage;
