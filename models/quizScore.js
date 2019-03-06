const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  
    category: {type: String},
    question: {type: String},
    answers: {type: Array},
    correctIndex: {type: Number}

});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;