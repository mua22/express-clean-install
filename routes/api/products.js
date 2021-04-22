var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:id", function (req, res) {
  res.send(req.params.id);
});
router.get("/", function (req, res) {
  res.send(["A", "B"]);
});

module.exports = router;
