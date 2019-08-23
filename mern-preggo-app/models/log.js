const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  title: { type: String, required: true },

});

const Log= mongoose.model("log", logSchema);

module.exports = Log;
