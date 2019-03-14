const router = require("express").Router();
const questionRoutes = require("./questions");
const userRoutes = require("./users");

// Book routes
router.use("/questions", questionRoutes);
router.use("/users", userRoutes);
module.exports = router;