const router = require("express").Router();
const fiddleController = require("../../controllers/fiddleController");

// this will match with "/score/scores"
router.route("/home")
  .get(fiddleController.findAll)
  .post(fiddleController.create);

// this will match with "/score/scores/:id"
router
  .route("/home/:id")
  .get(fiddleController.findById)
  .put(fiddleController.update)
  .delete(fiddleController.remove);

module.exports = router;