const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, default: null },
  password: { type: String, default: null },
  token: {type: String, default: null}
});

module.exports = User = mongoose.model("User", userSchema);