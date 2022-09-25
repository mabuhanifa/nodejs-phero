const express = require("express");
const {
  getTools,
  getTool,
  createTool,
} = require("../controllers/toolsController");
const viewCount = require("../middleware/viewCount");
const router = express.Router();

router.route("/").get(viewCount, getTools).post(createTool);
router.route("/:id").get(getTool);

module.exports = router;
