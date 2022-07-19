const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = Schema({
  name: { type: String, default: null},
  operation: { type: Object, default: null },
  tables: { type: Object, default: {} }
});

module.exports = Company = mongoose.model("Company", companySchema);