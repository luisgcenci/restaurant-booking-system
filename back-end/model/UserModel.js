const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, default: null },
  password: { type: String, default: null },
  token: {type: String, default: null}
});

module.exports = mongoose.model("user", userSchema);