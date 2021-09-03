const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskId: { type: String, default: null },
  taskName: { type: String, default: null }
});

module.exports = mongoose.model("task", taskSchema);