import axios from "axios";

export default {
  // Gets all books
  getQuestions: function() {
    return axios.get("/api/questions");
  },
  // Gets the questions with the given type
  getTypeQuestions: function(type) {
    return axios.get("/api/questions/" + type);
  },
  // Deletes the question with the given id
  deleteQuestions: function(id) {
    return axios.delete("/api/questions/" + id);
  },
  // Saves a question to the database
  saveQuestion: function(questionData) {
    return axios.post("/api/questions", questionData);
  }
};
