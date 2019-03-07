const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// questions routes
router.use("/api", apiRoutes);

// If no questions routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;