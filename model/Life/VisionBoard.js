const mongoose = require("mongoose");

const vissionSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

const vission = mongoose.model("vission", vissionSchema);

module.exports = vission;
