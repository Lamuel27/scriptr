const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  id: {type: Number},
  category: {type: String},
  questions: {type: Array},
  correctIndex: {type: Number}
});

const Quiz = mongoose.model("quiz", quizSchema);

module.exports = Quiz;