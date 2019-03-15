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
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  updateUser: function(userData) {
    return axios.put("/api/users", userData);
  },

  getUser: function(userData) {
    return axios.get("/api/users", userData);
  }
};
