const db = require("../models");

// methods for the FiddleController
module.exports = {
  findAll: function(req, res) {
    db.Fiddle.find(req.query)
      .then(dbFiddle => res.json(dbFiddle))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Fiddle.findById(req.params.id)
      .then(dbFiddle => res.json(dbFiddle))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Fiddle.create(req.body)
      .then(dbFiddle => res.json(dbFiddle))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Fiddle.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbFiddle => res.json(dbFiddle))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Fiddle.findById(req.params.id)
      .then(dbFiddle => dbFiddle.remove())
      .then(dbFiddle => res.json(dbFiddle))
      .catch(err => res.status(422).json(err));
  }
};
