const db = require("../models");

// methods for the questionsController
module.exports = {
  findAll: function(req, res) {
    db.Questions.find(req.query)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  findByType: function(req, res) {
    db.Questions.find({
      category: req.params.type
    })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Questions.create(req.body)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Questions.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Questions.findById(req.params.id)
      .then(dbQuiz => dbQuiz.remove())
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  }
};
