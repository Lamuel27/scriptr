const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  time: { type: Number, required: true },
});

const Quiz = mongoose.model("fiddle", quizSchema);

module.exports = Quiz;