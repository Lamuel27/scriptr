const router = require("express").Router();
const userController = require("../../controllers/userController");

// this will match with "/api/questions"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// this will match with "/api/users/:type"
router
  .route("/:type")
  .get(userController.findByType)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;