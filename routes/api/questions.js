const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// this will match with "/api/questions"
router.route("/")
  .get(questionsController.findAll)
  .post(questionsController.create);

// this will match with "/api/questions/:type"
router
  .route("/:type")
  .get(questionsController.findByType)
  .put(questionsController.update)
  .delete(questionsController.remove);

module.exports = router;