const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fiddleSchema = new Schema({
  time: { type: Number, required: true },
});

const Fiddle = mongoose.model("fiddle", fiddleSchema);

module.exports = Fiddle;
