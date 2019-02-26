const db = require("../models");

// methods for the QuizController
module.exports = {
  findAll: function(req, res) {
    db.Quiz.find(req.query)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Quiz.findById(req.params.id)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Quiz.create(req.body)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Quiz.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Quiz.findById(req.params.id)
      .then(dbQuiz => dbQuiz.remove())
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  }
};
