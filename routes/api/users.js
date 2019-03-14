const router = require("express").Router();
const userController = require("../../controllers/userController");

// this will match with "/api/users"
router.route("/")
  .post(userController.create);

// this will match with "/api/users/:type"
router
  .route("/:type")
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;