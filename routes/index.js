const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./score");
// score routes
router.use("/score", apiRoutes);
// If no score routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;