const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  
    category: {type: String},
    question: {type: String},
    answers: {type: Array},
    correctIndex: {type: Number}

});

const Questions = mongoose.model("Questions", questionsSchema);

module.exports = Questions;