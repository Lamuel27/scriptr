const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// this will match with "/api/scores"
router.route("/home")
  .get(quizController.findAll)
  .post(quizController.create);

// this will match with "/api/scores/:id"
router
  .route("/home/:id")
  .get(quizController.findById)
  .put(quizController.update)
  .delete(quizController.remove);

module.exports = router;